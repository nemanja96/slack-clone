import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import { auth } from '../firebase';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {

    const dispatch = useDispatch();

    const user = useSelector(selectUser);

    const logOut = () => {
        auth.signOut().then(dispatch(logout()));
    }

  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderAvatar src={user?.photoUrl} />
            <AccessTimeIcon />
        </HeaderLeft>
        <HeaderSearch>
            <SearchIcon />
            <input placeholder='Search' />
        </HeaderSearch>
        <HeaderRight>
            <IconButton className="icon-btn">
                <LogoutIcon onClick={logOut} />
            </IconButton>
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white; 
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    justify-content:  space-between;

    > .MuiSvgIcon-root{
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    text-align: center;
    background: #421f44;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    
    > .icon-btn {
        display: flex;
        align-items: flex-end;
        margin-left: auto;
        margin-right: 20px;

        > .MuiSvgIcon-root{
        color: white !important;
    }
    }

`