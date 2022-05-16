import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

function SidebarOption({ Icon, title, addChannelOption, id }) {

    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if(channelName){
            db.collection("rooms").add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        if(id){
            dispatch(enterRoom({
                roomId: id
            }))
        }
        console.log(id);
    }

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel }>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} className="sidebar-icon" />}
        {Icon ? ( 
            <h3>{title}</h3> ) : ( 
            <SidebarOptionChannel>
                <span>#</span> {title}
            </SidebarOptionChannel> )} 
    </SidebarOptionContainer>
  )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    &:hover{
        opacity: 0.9;
        background: #340e36;
    }

    > h3{
        font-weight: 500;
        @media screen and (max-width: 450px){
            margin-left: 10px;
            margin-bottom: 10px;
            font-size: 12px;
        }

        @media screen and (max-width: 450px){
            font-size: 11px;
            margin: 5px;
        }

        > span {
            padding: 15px;
        }
    }

    .sidebar-icon{
    @media screen and (max-width: 450px){
        display: none;
    }}
`;

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`;