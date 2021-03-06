import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
`
  // ----------
  // NAVIGATION
  // ----------
  export const Nav = styled.div`
    width: 100%;
    height: 70px;
    box-shadow: 1px 3px 8px lightgray;
    display: flex;
    justify-content: space-between;
  `

    export const AppLogo = styled.img`
      width: 180px;
      height: 55px;
      margin-top: 8px;
    `

    export const Menu = styled.div`
      padding-right: 25px;
      display: flex;
      justify-content: space-between;
    `

      export const ProfileLink = styled.p`
        margin: 22px 15px 0 0;
        color: dodgerblue;
        cursor: pointer;
          &:hover{text-decoration: underline;}
      `
      export const LogoutButton = styled.button`
        width: 100px;
        height: 35px;
        margin-top: 16px;
        border-radius: 6px;
        border: 1px solid dodgerblue;
        color: white;
        cursor: pointer;
        background-color: dodgerblue;
          &:hover {
            background-color: #1B82E6;
            border: 1px solid #1B82E6;
          }
      `
  // -------
  // PROFILE
  // -------
  export const ProfileWrap = styled.div`
    width: 400px;
    margin: 0px auto;
		margin-top: 40px;
		
		padding: 10px 20px 20px 20px;
	`
		export const PRow = styled.div`
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
		`

		export const PBoxSmall = styled.div`
			width: 36%;
			background-color: dodgerblue;
		`

		export const PBoxLarge = styled.div`
			width: 60%;
		`

    export const P = styled.p`
			font-size: 16px;
			padding-left: 6px;
			color: white;
		`
		
		export const P2 = styled(P)`
			color: #9F9F9F;
    `
    
  // ------
  // SCHOOL
  // ------
  export const SchoolForm = styled.form`
    width: 800px;
    margin: 0px auto;
    margin-top: 40px;
  `

    export const SchoolName = styled.input`
      width: 180px;
      height: 36px;
      border: 1px solid #9F9F9F;
      padding-left: 10px;
        &:nth-child(2) {margin: 0 10px 0 10px;}
    `

    export const AddSchool = styled.button`
      width: 100px;
      height: 40px;
      border: 1px solid dodgerblue;
      background-color: dodgerblue;
      color: white;
      margin-left: 10px;
      cursor: pointer;
        &:hover {
          background-color: #1B82E6;
          border: 1px solid #1B82E6;
        }
    `

    export const SchoolBox = styled.div`
      width: 800px;
      border: 1px solid #9F9F9F;
      margin: 0px auto;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
        &:hover {border: 1px solid dodgerblue;}
    `

      export const SchoolBoxItem = styled.div`
        width: 33%;
          &:nth-child(1){text-align: left;}
          &:nth-child(2){text-align: center;}
          &:nth-child(3){
            text-align: right;
            padding-right: 15px;
          }
      `

    export const H2 = styled.h2`
      font-size: 20px;
      color: #9F9F9F;
      padding-left: 15px;
      text-decoration: none;

    `

  // SCHOOL DATA
  export const SchoolWrap = styled.div`
    width: 800px;
    margin: 0px auto;
    margin-top: 20px;
      H2 {
        text-align: center;
        line-height: 15px;
      }
  `
    
    export const SchoolSpan = styled.span`
      color: dodgerblue;
    `

    export const ButtonWrap = styled.div`
      margin: 0px auto;
      display: flex;
      justify-content: center;
      margin: 20px 0 20px 0;
    `

    export const SchoolButton = styled(AddSchool)`
    `

    export const SchoolEdit = styled.form`
      display: flex;
      justify-content: center;
      margin: 15px 0 0 0;
    `

    export const SchoolInput = styled.input`
      width: 150px;
      height: 34px;
      border: 1px solid grey;
      color: gray;
      padding-left: 10px;
        &:nth-child(2) {margin: 0 10px 0 10px;}
    `