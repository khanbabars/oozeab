import React from "react";
import { API_ASSIGNMENTS } from "../cache/api";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Stockholm ", value: "Stockholm" },
  { label: "Göteborg", value: "Göteborg" },
  { label: "Malmö", value: "Malmö" },
  { label: "Distans", value: "Distans" },

];

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  color: black;
  padding: 0 5rem;
  li a {
    border-radius: 4px;
    padding: 0.1rem 1rem;

    cursor: pointer;
    color: black;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: gray;
  }
  li.active a {
    background-color: #efefef;
    border-color: gray;
    color: black;
    min-width: 32px;
    border: 1px solid gray;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export default class Assignments extends React.Component {
  constructor(props) {
    super(props);
    this.browseAssignment = this.props.browseAssignment;
    this.showProjectDetail = this.showProjectDetail.bind(this);
    this.state = {
      url: API_ASSIGNMENTS,
      loading: true,
      items: [],
      setInterval: 3600000,
      fetch: false,
      active: false,
      btnProjectDetail: "Läs mer",
      btnShowMore: "Läs mer",
      btnShowLess: "dölja",
      ids: [],
      setVisible: 10,
      pageCount: 0,
      offset: 0,
      perPageItems: [],
      multiSelectlist: [],
      multiListValue: [],
    };
  }
  async componentDidMount() {
    fetchData(this.state).then((item) => {
      const perPageItems = item.slice(this.state.offset, this.state.setVisible);
      this.setState({
        items: item,
        pageCount: Math.ceil(item.length / this.state.setVisible),
        perPageItems,
        loading: false,
      });
    });
  }

  static getDerivedStateFromProps(nextProps, state) {
    state.fetch = true;
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  showProjectDetail(e) {
    if (!this.state.ids.includes(+e.target.id)) {
      this.state.ids.push(+e.target.id);

      this.setState({ active: true, btnProjectDetail: this.state.btnShowLess });
    } else {
      this.state.ids.splice(
        this.state.ids.findIndex((id) => + e.target.id),
        1
      );
      this.setState({ ids: this.state.ids });
    }
  }
  loadMoreItems = () => {
    this.setState({ setVisible: this.state.setVisible + 10 });
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected + 1;
    const currentSelectionStart =
      selectedPage === 1 ? selectedPage : selectedPage * 10 - 10;
    const currentSelectionEnd = selectedPage * 10;
    if (selectedPage > 0) {
      this.setState({
        offset: currentSelectionStart,
        perPageItems: this.state.items.slice(
          currentSelectionStart,
          currentSelectionEnd
        ),
        setVisible: currentSelectionEnd,
      });
    } else {
      this.setState({ perPageItems: this.state.items.slice(0, 10) });
    }
  };

  handleMultiSelect = (e) => {

    this.setState({ multiSelectlist: e });
  };

  render() {
    const { loading } = this.state;
    if (loading) {
      return <div>Loading ... </div>;
    } else {
      return (
        <React.Fragment>
          <div>
            {" "}
            <ul>
              <MultiSelect
                options={options}
                value={this.state.multiSelectlist}
                onChange={this.handleMultiSelect}
                labelledBy="selectList"
                overrideStrings={{
                  selectSomeItems: "Plats",
                  search: "Sök",
                  selectAll: "Alla",
                }}
              />

    {/*           {this.state.multiSelectlist.map((location, index) => (
                // <li key={`${location}-${index}`}>
                <li key={index}>{location.value}</li>
              ))}
 */}
              <br />
              {this.state.perPageItems
                .filter((item) =>
                  this.state.multiSelectlist.length
                    ? this.state.multiSelectlist.find((selected) => {
                        const test = new RegExp(
                          `^${selected.value}`, 'g'
                        ).test(item.project_location.trim());
                       
                    /*     console.log(
                          `${selected.value} ${item.project_location} ${test}` 
                        );*/
                        return test;
                      })
                    : true
                )
                .slice(0, this.state.setVisible)
                .map((item, index) => (
                  <li
                    key={index}
                    style={{ border: "1px ridge #e8e8e8", padding: "25px" }}
                  >
                    <b>{item.project_heading}</b>
                    <b
                      style={
                        item.company_initial === "UP"
                          ? {
                              fontSize: "12px",
                              borderRadius: "25px",
                              color: "white",
                              backgroundColor: "#426279",
                              padding: "2px",
                            }
                          : {
                              fontSize: "15px",
                              paddingLeft: "4px",
                              fontStyle: "italic",
                              color: "#009e59",
                            }
                      }
                    >
                      {item.company_initial}
                    </b>
                    <br />
                    <div style={{ fontSize: "15px", paddingTop: "10px" }}>
                      Startdatum: {item.project_start_date}
                      <br />
                      Slutdatum: {item.project_end_date}
                      <br />
                      Ansök senast:{item.application_close_date}
                      <br />
                      Omfattning: {item.project_availablity}
                    </div>
                    <b
                      style={{
                        fontSize: "16px",
                        fontWeight: "normal",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {this.state.ids.includes(+item.project_id) &&
                        item.project_details}
                    </b>{" "}
                    <br />
                    {/*    
    <ApplyButton item={item} showLess={this.state.btnShowLess} event={this.showProjectDetail} text={this.state.btnShowMore} ids={this.state.ids}/> */}
                    <b
                      style={{
                        fontSize: "13px",
                        borderRadius: "25px",
                        color: "white",
                        backgroundColor: "#17a2b8",
                        padding: "5px",
                        border: "1px solid black",
                      }}
                    >
                      {item.project_location}
                    </b>
                    &nbsp; &nbsp;
                    <button
                      style={{
                        fontSize: "14px",
                        fontWeight: "normal",
                        borderRadius: "5px",
                        marginTop: "5px",
                      }}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open("/" + item.project_id);
                      }}
                    >
                      Ansök
                    </button>
                    <br />
                  </li>
                ))}
            </ul>
            <MyPaginate
              previousLabel={"Föregående"}
              nextLabel={"Nästa"}
              pageCount={this.state.pageCount}
              onPageChange={this.handlePageClick}
            />
            <br />
            <br />
            <br />
            <br />
          </div>
        </React.Fragment>
      );
    }
  }
}
// eslint-disable-next-line
const ApplyButton = ({ item, event, text, showLess, ids }) => {
  if (ids.includes(+item.project_id)) {
    return (
      <button
        style={{ fontSize: "14px", fontWeight: "normal", borderRadius: "5px" }}
        onClick={event}
        id={item.project_id}
      >
        {showLess}
      </button>
    );
  }
  return (
    <button
      style={{ fontSize: "14px", fontWeight: "normal", borderRadius: "5px" }}
      onClick={event}
      id={item.project_id}
    >
      {text}
    </button>
  );
};
async function fetchData(state) {
  const response = await fetch(state.url); //fetch
  const data = await response.json();
  // eslint-disable-next-line no-empty-pattern
  const content = ([] = data.items); //assign items to content array
  const item = content || [];

  return item;
} //return items
