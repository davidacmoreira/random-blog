import React, { Component } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Posts from "../components/Posts";
import SEO from "../components/SEO/SEO";

export default class Tag extends Component {
    render() {
        const { data, pathContext } = this.props;
        const { tag } = pathContext;
        const { pathname } = this.props.location;
        return (
            <Layout>
                <div>
                    <SEO title={`tag: ${tag}`} description={`all random posts tagged with "${tag}"`} url={pathname} />
                    <h2 style={{ fontSize: "22px", padding: "0px 15px" }}>
                        All random posts with tag: {tag}
                    </h2>
                    <Posts data={data} />
                </div>
            </Layout>
        );
    }
};

export const pageQuery = graphql`
    query TagPage($tag: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [fields___prefix], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        date(formatString: "DD/MM/YY")
                        description
                    }
                }
            }
        }
    }
`;