import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO() {
    const {title, description, siteUrl, imageUrl } = useMetadata();
    return <>
        { title && <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
        </>}

        { description && <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description}/> 
        </>}

        { siteUrl && <>
                <meta property="og:url" content={siteUrl} /> 
                {imageUrl && <meta property="og:image" content={`${siteUrl}${imageUrl}`} />}
            </>
        }

        <meta property="og:type" content="website" />
    </>
}

const useMetadata = () => {
    const q : Queries.SeoQuery = useStaticQuery(graphql`
        query Seo {
            site {
                siteMetadata {
                    title
                    siteUrl
                    imageUrl
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
        description: q.markdownRemark?.excerpt,
        imageUrl: q.site?.siteMetadata?.imageUrl
    }
};