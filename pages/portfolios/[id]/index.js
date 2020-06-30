import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import { formatDate } from "helpers/functions";
import { useGetUser } from "actions/user";
import PortfolioApi from "lib/api/portfolio";
import { useRouter } from "next/router";

const Portfolio = (props) => {
  const { portfolio } = props;
  const { user, userLoading } = useGetUser();
  const router = useRouter();

  return (
    <BaseLayout navClass="transparent" user={user} userLoading={userLoading}>
      <BasePage
        title={`${portfolio.title} - Anthony Stachowitz`}
        noWrapper
        indexPage
        metaDescription={portfolio.description}
      >
        <div className="portfolio-detail">
          <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <main role="main" className="inner page-cover">
              {router.isFallback && (
                <h1 className="cover-heading">
                  Your page is being served.. please wait 1 minute.
                </h1>
              )}
              {!router.isFallback && (
                <>
                  <h1 className="cover-heading">{portfolio.title}</h1>
                  <p className="lead dates">
                    {formatDate(portfolio.startDate)} -{" "}
                    {formatDate(portfolio.endDate) || "Present"}
                  </p>
                  <p className="lead info mb-0">
                    {portfolio.jobTitle} | {portfolio.company} |{" "}
                    {portfolio.location}
                  </p>
                  <p className="lead">{portfolio.description}</p>
                  <p className="lead">
                    <a
                      href={portfolio.companyWebsite}
                      target="_"
                      className="btn btn-lg btn-secondary"
                    >
                      Visit Company
                    </a>
                  </p>
                </>
              )}
            </main>
          </div>
        </div>
      </BasePage>
    </BaseLayout>
  );
};

// executed at build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  // get the paths we want pre-rendered based on id
  const paths = portfolios.map((portfolio) => {
    return {
      params: { id: portfolio._id },
    };
  });
  // fallback false means pages not found will be resolved into 404 pages
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return {
    props: { portfolio },
    unstable_revalidate: 10,
  };
}

export default Portfolio;
