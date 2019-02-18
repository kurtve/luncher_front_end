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
      width: 170px;
      display: flex;
      justify-content: space-between;
    `

      export const ProfileLink = styled.p`
        margin-top: 22px;
        color: dodgerblue;
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
			color: gray;
			padding-left: 6px;
			color: white;
		`
		
		export const P2 = styled(P)`
			color: #9F9F9F;
		`