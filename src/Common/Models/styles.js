import styled from 'styled-components';

const Styles = styled.div`

/* Models CSS */
.modal-header{
    border:0;
    color:#28a745;
}
.modal-header .close{
    font-size: 4rem;
    padding: 0;
    color: red;
    margin-right: 10px;
}
.modal-header .modal-title{
    padding: 1rem;
    font-size: 30px;
    font-weight: bolder;
}
.modal-dialog{
    max-width: 90% !important;
}
.modal-body{
    padding:0 5rem 5rem 3rem;
}
.modal-body h6{
    color: #28a745;
}
.modal-body h3{
    color: #28a745;
    text-align: center;
}
.modal-body h4{
    color: #28a745;
    /* text-align: center; */
    padding-top: 20px;
}
.modal-body span{
    color: #1b1a1a;
    margin-left:50px;
}
.modal-body .stay{
    color:#28a745;
}
.modal-body p{
    line-height: 35px;
    font-size:18px
}
.modal-body img{
    height:500px;
    width: 100%;
}

`;

export default Styles;