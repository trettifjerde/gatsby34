import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO() {
    const {title, description, siteUrl, themeColor} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                    themeColor
                }
            }
        }
    `);
    return <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name='theme-color' content={themeColor} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="" />
        <meta name="og:url" content={siteUrl} />
    </>
}