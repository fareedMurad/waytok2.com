import styled from 'styled-components';

const Styles = styled.div`
.fa-comments{
    padding:8px;
    ${'' /* margin-right:20px; */}
    ${'' /* border-radius: 50%; */}
    ${'' /* background-color :#28a745; */}
    ${'' /* position: fixed;
    right:20px;
    bottom:40px;
    z-index: 15; */}
    height:80px;
    width:80px;
    transition:0.5s;
}
.notifyWrapper{
    position: fixed;
    right:20px;
    bottom:40px;
    z-index: 15;
    margin-right:20px;
    padding:8px;
}
.customPopover{
    transition:0.5s linear;
    width:22rem;
    overflow: hidden;
    z-index:999;
    background-color:#F5F9FF;
    border-radius:8px;
}
.decoration{
    position:fixed;
    right:72px;
    bottom: 140px;
    background-color:#F5F9FF;
    transform:rotate(60deg)

}
.customPopover .header{
    background-color:#dce8f9;
    color:#28a745;
    padding:20px 20px;
    text-align:center;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
}
.customPopover .header h6{
    font-weight:bold;
}
.customPopover .customBody{
    color:#d1d1d1;
    text-align: left !important;
    padding:10px;
}  
.customPopover .customBody p{
    font-size:15px;
}
${'' /* .fa-comments:hover{
    transform:translate3D(10px);
} */}

footer img:hover{
    box-shadow: none !important;
}
${'' /* .customPopover{
    width:
} */}
#footer{
    background-color:#28a745;
    color:#fff;

}
.mainFooter{
    background-color: #1e7432;
}
.footer-para{
    font-size:13px;
    color: rgb(209, 207, 209);
}
.form-control{
    width:80%;
    border: none;
    background-color: transparent;
    border-radius: 0;
    border-bottom:1.2px solid #706e6e;
}
.form-control:focus{
    background-color:transparent !important;
    outline: none;
    box-shadow: none;
}
#footer label{
    margin-bottom:0;
    margin-top:1rem;
    color: rgb(167, 164, 164);
}
.sub-footer{
    width:90%;
    margin: 0 auto;
}

.sub-footer-head-tag{
    font-size:15px;
    font-weight: bold;
    color: #28a745;
    margin-bottom: 10px;
}
.sub-footer{
    background-color: rgba(255,255,255,0.8);
    padding: 3rem 3rem 0 3rem;
    border-radius: 3px;
    color: #0d521d;
}
.sub-footer-links{
    display: block;
    color: #2b2a2a;
    padding: 4px 0;
    cursor:pointer;
}
.sub-footer-links span{
    font-weight:bold;
    color: #2b2a2a;
}
.sub-footer .sub-footer-links:hover{
    text-decoration: none;
    color:#28a745;
}
#sub-footer-link{
    display: inline;
}
#services{
    color: #000;
    text-decoration: none;
    display: block;
    padding: 4px 0;
    font-weight:700;
}
.mainFooter .circle-icon {
    font-size:20px;
    background-color: rgba(255,255,255,0.8);
    color: #0d521d;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.3s;

}
.mainFooter .circle-icon:hover{
    font-size:20px;
    border: 2px solid rgba(255,255,255,0.8);
    color: #fff;
    background-color: transparent;
}
.copyright{
    font-size:15px;
}
@media(max-width: 760px){
    #chat-icon{
        display: none !important;
    }
    .sub-footer{
        width:100% !important;
        padding: 2rem 2rem 0 2rem !important;
    }
}

`;

export default Styles;