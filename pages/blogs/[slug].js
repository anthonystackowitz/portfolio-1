import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { Row, Col } from "reactstrap";
import { useGetUser } from "actions/user";
import { SlateView } from "slate-simple-editor";
import { useRouter } from "next/router";

import BlogApi from "lib/api/blogs";

const BlogDetail = ({ blog }) => {
  const { data, loading } = useGetUser();
  const router = useRouter();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage
        title={`${blog.title} - Anthony Stachowitz`}
        className="slate-container"
        metaDescription={blog.subtitle}
      >
        <Row>
          {router.isFallback && (
            <h1>Please wait 1 minute for the server to load the Blog</h1>
          )}
          {!router.isFallback && (
            <Col md={{ size: 8, offset: 2 }}>
              <SlateView initialContent={blog.content} />
            </Col>
          )}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  const json = await new BlogApi().getAll();
  const blogs = json.data;
  const paths = blogs.map((b) => ({ params: { slug: b.slug } }));
  debugger;
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const json = await new BlogApi().getBySlug(params.slug);
  return { props: { blog: json.data }, unstable_revalidate: 10 };
}

export default BlogDetail;
