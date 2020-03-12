import styled from 'styled-components';

const Styles = styled.div`

i:hover{
    cursor: pointer;
}
p{
    font-family: 'Comfortaa', cursive;
}
.navbar{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.10);
    font-family: 'Comfortaa', cursive;
}
.navbar li .fa-shopping-cart{
    font-size:21px
}
.navbar li a{
    font-size:15px;
}
.nav-item .nav-link:hover{
color:#28a745 !important;
}
.nav-icons{
    position: absolute;
    right: 6rem;
}

.nav-icons i{
    font-size:20px;
    color: #706e6e;
    cursor: pointer;
    margin: 0.5rem;
}

.nav-icons i:hover{
    color:rgb(65, 62, 62)
}
.dropdown-menu{
    background-color: #f8f9fa;
}
.dropdown-menu a:hover{
    color: #fff;
    background-color: #28a745;
}
a:hover{
    color: #28a745;
}
@media(max-width: 760px){
    .navbar-brand img{
        height:120px;
    }
    .navbar-brand{
        padding-left: 0 !important;
    }
    .nav-icons{
        display: inline !important;
    }
    #chat-icon{
        display: none !important;
    }
    .head-mobile-display{
        opacity: 0.9 !important;
        display: inline !important;
    }
}
@media(max-width: 990px){
    .fa-comments{
        display:none;
    }
}
`;

export default Styles;