import styled from 'styled-components';

export const RegWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  background: #1e90ff;
  background: -moz-linear-gradient(-45deg, #1e90ff 0%, #1e90ff 0%, #131313 100%);
  background: -webkit-linear-gradient(-45deg, #1e90ff 0%,#1e90ff 0%,#131313 100%);
  background: linear-gradient(135deg, #1e90ff 0%,#1e90ff 0%,#131313 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e90ff', endColorstr='#131313',GradientType=1 );
`

  export const FormWrapper = styled.div`
    width: 275px;
    background-color: white;
    margin: 0px auto;
    border-radius: 7px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
  `

    export const Logo = styled.img`
      width: 180px;
      padding: 20px 0 10px 0;
      margin: 0px auto;
    `

    export const Form = styled.form`
      width: 80%;
      margin: 0px auto;
      padding: 0 0 20px 0;
    `

      export const Input = styled.input`
        width: 94%;
        height: 35px;
        background-color: white;
        color: #131313;
        border: 2px solid #ECECEC;
        border-radius: 7px;
        padding-left: 8px;
        margin-top: 10px;
      `

      export const LoginButton = styled.button`
         width: 100%;
         height: 40px;
         background-color: #1e90ff;
         color: white;
         border: 3px solid #1e90ff;
         border-radius: 7px;
         margin: 0px auto;
         margin-top: 15px;
         cursor: pointer;
          &:hover {
            background-color: #1B82E6;
            border: 3px solid #1B82E6;
          }
      `
      
      export const RegisterButton = styled(LoginButton)``

      export const RegisterText = styled.p`
        font-size: 14px;
        text-align: center;
        padding-top: 15px;
      `

      export const RegisterSpan = styled(RegisterText)`
        color: #1e90ff;
        margin-top: -12px;
        cursor: pointer;
          &:hover {text-decoration: underline;}
      `