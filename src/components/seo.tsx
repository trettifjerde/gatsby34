import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO() {
    const {title, description, themeColor, siteUrl} = useMetadata();
    return <>
        { title && <>
            <title>{title}</title>
            <meta name="og:title" content={title} />
        </>}

        { description && <>
            <meta name="description" content={description} />
            <meta name="og:description" content={description}/> 
        </>}

        { themeColor && <meta name='theme-color' content={themeColor} /> }

        { siteUrl && <meta name="og:url" content={siteUrl} /> }

        <meta name="og:type" content="website" />
        <meta name="og:image" content="" />
    </>
}

const useMetadata = () => {
    const q : Queries.SeoQuery = useStaticQuery(graphql`
        query Seo {
            site {
                siteMetadata {
                    title
                    siteUrl
                    themeColor
                }
            }
            markdownRemark(frontmatter: { lang: {eq: "en" } } ) {
                excerpt
            }
        }
    `);
    return {
        title: q.site?.siteMetadata?.title,
        siteUrl: q.site?.siteMetadata?.siteUrl,
        themeColor: q.site?.siteMetadata?.themeColor,
        description: q.markdownRemark?.excerpt
    }
};