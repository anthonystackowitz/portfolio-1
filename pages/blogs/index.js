import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { useGetUser } from "actions/user";
import Masthead from "components/shared/Masthead";
import { Row, Col } from "reactstrap";
import BlogApi from "lib/api/blogs";
import BlogItem from "components/BlogItem";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";


const Blogs = ({ blogs }) => {
  const { user, userLoading } = useGetUser();
  return (
    <BaseLayout
      //navClass="transparent"
      className="blog-listing-page"
      user={user}
      userLoading={userLoading}
    >
      <Masthead imagePath="/images/home-bg.jpg">
        <h1>Blogs</h1>
        <span className="subheading">Some of my thoughts...</span>
      </Masthead>
      <BasePage title="Blogs - Anthony Stachowitz" className="blog-body">
        <Row>
          {blogs.map((blog) => (
            <Col key={blog._id} md="10" lg="8" className="mx-auto">
              <BlogItem blog={blog} />
              <hr></hr>
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const json = await new BlogApi().getAll();
  return {
    props: {blogs: json.data},
    unstable_revalidate: 60,
  };
}

export default Blogs;
