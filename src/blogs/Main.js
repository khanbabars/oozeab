



export default class GetBlogTitle extends React.Component {
    constructor(props){
        super(props);
        this.state = {  url : "https://shazib.online/ords/general/blog/blogtitle",  
                        loading: true,  items: [],  setInterval: 3600000, 
                        fetch: false
 }};
async componentDidMount() {  
        fetchData(this.state).then((item)=>{
          this.setState({ 
          items : item,
          loading : false
     });},
     )}       

static getDerivedStateFromProps(nextProps, state)
    {     state.fetch = true   
        return  state }

      shouldComponentUpdate (nextProps, nextState){   
        setTimeout(() => {  if(this.state.fetch){     
        fetchData(this.state).then((item)=>{     
            this.setState({ 
            items : item,
            fetch :false });  })  }},
            this.state.setInterval);  
      return true }
 
      render() { const { loading, items} = this.state;
        if (loading)  {  
        return <div>Loading ... </div>; } 
        else {
        return (  
 <React.Fragment> 
    <div> <ul >{this.state.items.map((item, index) => <li key={index}> 
    <a style={{ paddingTop: '5px', fontSize: '17px', color: '#434952', fontWeight: 'bold'}} href={item.link}><br/><br/>{item.blog_title}</a> 
    <div style={{ paddingTop: '5px', fontSize: '14px', color: 'gray', fontWeight: 'bold'}} >{item.created}</div>
    <StarRatings
        rating={item.rating}
        starDimension="18px"
        starSpacing="1px"
        starRatedColor="darkcyan"
      /><div style={{ paddingTop: '5px', fontSize: '12px', color: 'gray', fontWeight: 'bold'}} >Rated {item.vote} times</div>
    </li>)}
  </ul>
    </div>
 </React.Fragment>) }}}
 
 async function fetchData(state){      
  const response = await fetch(state.url); //fetch
  const data = await response.json();
  const content=[]  = data.items //assign items to content array
  const item =  content||[]
  return item }   //return item

