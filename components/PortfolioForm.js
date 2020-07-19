import { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

const PortfolioForm = ({ onSubmit, initialData = {} }) => {
  const { register, handleSubmit, setValue } = useForm({defaultValues: initialData});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    register({ name: "startDate" });
    register({ name: "endDate" });
  }, [register]);

  useEffect(() => {
    const {startDate, endDate} = initialData;
    if (startDate) {setStartDate(new Date(startDate))}
    if (endDate) {setEndDate(new Date(endDate))}
  }, [initialData])

  const handleDateChange = (dateType, setDate) => (date) => {
    setValue(dateType, date);
    setDate(date);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row form>
        <Col md={4}>
          <FormGroup className="form-group">
            <Label htmlFor="title">Title</Label>
            <Input
              innerRef={register}
              className="form-control"
              type="text"
              name="title"
              id="title"
              placeholder="project title"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="form-group">
            <Label htmlFor="company">Main Technology</Label>
            <Input
              innerRef={register}
              className="form-control"
              type="text"
              name="company"
              id="company"
              placeholder="main tech"
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="form-group">
            <Label htmlFor="companyWebsite">Github/code Location</Label>
            <Input
              innerRef={register}
              className="form-control"
              type="text"
              name="companyWebsite"
              id="companyWebsite"
              placeholder="code location"
            />
          </FormGroup>
        </Col>
      </Row>

      <Row form>
        <Col md={6}>
          <FormGroup className="form-group">
            <Label htmlFor="location">Location</Label>
            <Input
              innerRef={register}
              className="form-control"
              type="text"
              name="location"
              id="location"
              placeholder="location"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="form-group">
            <Label htmlFor="jobTitle">Development Type</Label>
            <Input
              innerRef={register}
              className="form-control"
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="development type"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label htmlFor="description">Description</Label>
        <Input
          innerRef={register}
          className="form-control"
          type="textarea"
          name="description"
          id="description"
          placeholder="description"
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="startDate">Start Date</Label>
        <div>
          <DatePicker
            showYearDropdown
            selected={startDate}
            onChange={handleDateChange("startDate", setStartDate)}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="endDate">End Date</Label>
        <div>
          <DatePicker
            disabled={!endDate}
            showYearDropdown
            selected={endDate}
            onChange={handleDateChange("endDate", setEndDate)}
          />
        </div>
      </FormGroup>
      <FormGroup>
        {endDate && (
          <Button
            type="button"
            className="btn btn-danger"
            onClick={() => handleDateChange("endDate", setEndDate)()}
          >
            No End Date
          </Button>
        )}
        {!endDate && (
          <Button
            type="button"
            className="btn btn-success"
            onClick={() =>
              handleDateChange(
                "endDate",
                setEndDate
              )(new Date(new Date().setHours(0, 0, 0, 0)))
            }
          >
            Set End Date
          </Button>
        )}
      </FormGroup>

      <Button type="submit">Create</Button>
    </Form>
  );
};

export default PortfolioForm;
