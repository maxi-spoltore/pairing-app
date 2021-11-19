import React, { createContext, useReducer, useContext } from "react";

const TeamStateContext = createContext(null);
const TeamDispatchContext = createContext(null);

const ActionTypes = {
  CREATE_MEMBER: 'create_member',
  DELETE_MEMBER: 'delete_member',
  UPDATE_MEMBER: 'update_member',
  SAVE_STORED_MEMBERS: 'save_stored_members',
  CLEAR_MEMBER_LIST: 'clear_member_list'
}

const initialState = {
  members: []
}

const TeamContextReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_MEMBER:
      return {
        ...state, 
        members: [...state.members, action.payload]
      }
    case ActionTypes.SAVE_STORED_MEMBERS:
      return {
        ...state, 
        members: action.payload
      }
    case ActionTypes.UPDATE_MEMBER:
      return {
        ...state,
        members: state.members.map(member => {
          const { id, name } = action.payload;
          if (member.id === id) {
            const updatedMember = { ...member, name }
            return updatedMember
          }
          return member
        })
      }
    case ActionTypes.DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter(member => member.id !== action.payload)
      }
    case ActionTypes.CLEAR_MEMBER_LIST:
      return {
        ...state,
        members: []
      }
    default:
      return state
  }
}

const TeamContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(TeamContextReducer, initialState)

  return (
    <TeamStateContext.Provider value={state}>
      <TeamDispatchContext.Provider value={dispatch}>
        {children}
      </TeamDispatchContext.Provider>
    </TeamStateContext.Provider>
  )
}

const useTeamState = () => {
  const context = useContext(TeamStateContext)
  if (context === undefined) {
    throw new Error(
      'useTeamState must be used within a TeamContextProvider'
    )
  }
  return context
}

const useTeamDispatch = () => {
  const context = useContext(TeamDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useTeamDispatch must be used within a TeamContextProvider'
    )
  }
  return context
}

export { TeamContextProvider, useTeamState, useTeamDispatch, ActionTypes }