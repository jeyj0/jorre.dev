import { h } from "preact"

const ExternalLink = ({ children, url }) => <a href={url} target="_blank" rel="noopener">{children}</a>;

export default ExternalLink;
