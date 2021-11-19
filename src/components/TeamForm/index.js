import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IconButton } from "@chakra-ui/react"
import { XIcon } from '@heroicons/react/outline'
import ContentEditable from 'react-contenteditable'
import store from 'store'
import { useTeamState, useTeamDispatch, ActionTypes } from '../TeamContext'
import { validateArr } from '../../utils'

const TeamForm = () => {
  const [inputValue, setInputValue] = useState('')
  const { members } = useTeamState()
  const dispatch = useTeamDispatch()

  const handleEditChange = (e, memberId) => {
    const payload = {
      id: memberId,
      name: e.target.value
    }
    dispatch({type: ActionTypes.UPDATE_MEMBER, payload})
  }

  const handleSubmit = e => {
    if (e.key === 'Enter') {
      const newMember = {
        id: uuidv4(),
        name: e.target.value
      }
      dispatch({type: ActionTypes.CREATE_MEMBER, payload: newMember})
      setInputValue('')
    }
  }

  const handleDeleteMember = member => {
    const { id } = member
    dispatch({type: ActionTypes.DELETE_MEMBER, payload: id})
  }

  useEffect(() => {
    if (validateArr(members)) store.set('members', members)
  }, [members])

  return (
    <div className='container w-10/12 md:w-5/12'>
      <div className='mt-4 md:mt-8 mb-6'>
        <label htmlFor='team' className='flex flex-col md:flex-row items-center'>
          <span className='mr-2 md:text-lg'>Ingresá un miembro del equipo:</span>
          <input 
            id='team' 
            type='text' 
            value={inputValue} 
            className='bg-green-200 rounded'
            autocomplete='off'
            autoFocus
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => handleSubmit(e)} 
          />
        </label>
      </div>
      {!!members && !!members.length && (
        <ul className=''>
          {members.map(member => {
            return (
              <div key={member.id} className='flex items-center bg-green-400 rounded-lg p-4 mb-4 transition-all'>
                <li className='flex-1 text-2xl font-semibold capitalize tracking-wide overflow-hidden'>
                  <ContentEditable html={member.name} className='w-6/12' onChange={(e) => handleEditChange(e, member.id)} />
                </li>
                <IconButton 
                  aria-label='Delete member' 
                  size='sm' 
                  icon={<XIcon />}
                  className='ml-4' 
                  onClick={() => handleDeleteMember(member)}
                />
              </div>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default TeamForm
