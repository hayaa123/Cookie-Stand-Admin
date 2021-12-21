import Head from "./CookieHead"
import CreateForm from "./CreateForm"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"
import ReportTable from "./ReportTable"
const CookieStandAdmin =(props)=>{
 return(
 <>
 <Head/>
 <Header/> 
 <Main SubmitHandeler = {props.SubmitHandeler} latestStand = {props.latestStand}/>
 <CreateForm/>
 <ReportTable stand= {props.stand}/>
 <Footer/>

 </>
    
 )
 
}

export default CookieStandAdmin