import React from "react";
import { API_ASSIGNMENTS } from "../cache/api";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
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
        this.state.ids.findIndex((id) => +e.target.id),
        1
      );
      this.setState({ ids: this.state.ids });
    }
  }
  loadMoreItems = () => {
    this.setState({ setVisible: this.state.setVisible + 10 });
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
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

  render() {
    const { loading } = this.state;
    if (loading) {
      return <div>Loading ... </div>;
    } else {
      return (
        <React.Fragment>
          <div style={{ fontSize: "17px", border: "1px solid #efefef", padding: "25px" }}>
            {" "}
            <ul>
              {this.state.perPageItems
                .slice(0, this.state.setVisible)
                .map((item, index) => (
                  <li key={index}>
                    <b>{item.project_heading}</b>
                    <b
                      style={{
                        fontSize: "12px",
                        borderRadius: "25px",
                        color: "white",
                        backgroundColor: "#426279",
                        padding: "2px"
                    
                      }}
                    >
                     
                      {" "}
                      UP
                    </b>
                    <br />
                    <div>
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
                        whiteSpace: "pre-wrap"
                        
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
                        border: "1px solid black"
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
                    <hr></hr>
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
            {/* <nav aria-label="Page navigation comments">
            <ReactPaginate 
              previousLabel={"Föregående"}
              nextLabel={"Nästa"}
              breakLabel={"..."}
              breakClassName={"page-item"}
              breakLinkClassName="page-link"
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              renderOnZeroPageCount={null}

              hrefBuilder={(page, pageCount, selected) =>
                page >= 1 && page <= pageCount ? `/page/${page}` : '#'
              }
              hrefAllControls
       
              onClick={(clickEvent) => {
                console.log('onClick', clickEvent);
                // Return false to prevent standard page change,
                // return false; // --> Will do nothing.
                // return a number to choose the next page,
                // return 4; --> Will go to page 5 (index 4)
                // return nothing (undefined) to let standard behavior take place.
              }}
            />
             </nav> */}
            <br />
            {/* <button
              style={{
                fontSize: "18px",
                borderRadius: "4px",
                textAlign: "center",
                marginLeft: "500px",
                marginBottom: "100px",
              }}
              onClick={this.loadMoreItems}
            >
              Visa flera{" "}
            </button> */}
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
