import styled from "styled-components"

export const Container = styled.div`
padding:20px 150px;
display: flex;
justify-content:space-between;
`

export const Left = styled.div`
width:70%;
padding:10px;
border:1px solid rgb(0,0,0,.1);
`  

export const Thumb = styled.div`
width:100%;
img{
    width:100%;
    height:auto;
    border-radius:5px;
}
`  
export const Description = styled.div`
padding:30px 0;
h3,p{
margin-bottom:15px;
}

`  

export const Right = styled.div`
width:28%;
padding:10px;
border:1px solid rgb(0,0,0,.1);
border-radius:5px;

`

export const ProfileImg  = styled.div`
img{
    width:115px;
   margin-right:11px;
    margin-bottom:15px 0px;
    border-radius:30px;
}
`
export const Profile  = styled.div`
display:flex;
justify-content: space-between;
`
export const ProfileDescription  = styled.div`
h3,p{
margin-bottom:15px;
}
`

export const ProfileContact  = styled.div`
h3,p{
    margin-bottom:15px;
    }
`
export const ProfileForm  = styled.div`
h3,p{
    margin-bottom:15px;
    }
    form{
        input, textarea{
            height:56px;
            padding:8px 15px;
            border-radius:3px;
            width:100%;
            letter-spacing:0.1px;
            font-size:15px;
            margin-bottom: 10px;
            outline:none;
            border:1px solid grey;
            resize:none;
        }   
            
            }
            button:hover{
                background-color:Blue;
            }
        
    }
`
