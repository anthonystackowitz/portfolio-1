import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

const PortfolioCard = ({ portfolio, children }) => {
  return (
    <Card className="portfolio-card">
      <CardHeader className="portfolio-card-header">
        {portfolio.jobTitle}
      </CardHeader>
      <CardBody>
        <p className="portfolio-card-city">{portfolio.location}</p>
        <CardTitle className="portfolio-card-title">
          {portfolio.title.slice(0, 15)}
        </CardTitle>
        <CardText className="portfolio-card-text">{`${portfolio.description.slice(
          0,
          26
        )} ${portfolio.description.length < 27 ? "" : "..."}`}</CardText>
        {children}
      </CardBody>
    </Card>
  );
};

export default PortfolioCard;
