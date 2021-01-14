 
const Home_section = () => (
  
   <section className="home_section">
     <div  className="container-fluid">
       <div className="row adu_row">
           <div className="col-md-5 adu-col-1">
            <h1 className="what-is-adu">WHAT IS AN ADU?</h1>
            <p className="an-accessory">An accessory dwelling unit (ADU) is a legal and regulatory term for a secondary house or apartment that shares the building lot of a larger, primary house.</p>
            <ul className="list-group adu-checkmark">
  <li className="list-group-item ">
     <img src="/checkmark.svg" />
     <span className="">Located on the same lot as a stand-alone
            </span>
  </li>
  <li className="list-group-item">
  <img src="/checkmark.svg" />
            <span className="">Could be used as accessory apartments, secondary suites, and granny flats</span>
  </li>
  <li className="list-group-item">
    <img src="/checkmark.svg" />
    <span className="">Must include permanent solutions for living, sleeping, eating, cooking, and sanitation</span>
  </li>
</ul>
           </div>
           <div className="col-md-5">
            <img className="adu_1" src="/adu_1.svg" />
           </div>
       </div>
       </div>
   </section>
)

export default Home_section;