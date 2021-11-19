import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { sortMembers } from '../../utils'
import { Button } from "@chakra-ui/react"
import { useTeamState } from '../TeamContext'
import GoBack from '../GoBack'

const TeamList = ({render}) => {
  const { members } = useTeamState()
  const [loading, setLoading] = useState(false);
  const [sortedMembers, setSortedMembers] = useState([])

  const handleSortMembers = () => {
    setLoading(true)
    setSortedMembers([])
    const newSortedMembers = sortMembers(members)
    
    return setTimeout(() => { 
      setSortedMembers(newSortedMembers);
      setLoading(false)
    }, 2500)
  }

  return (
    <div className='mt-6'>
      {!members || !members.length ? <GoBack /> : null}
      {!!members && !!members.length && (
        <div className='flex flex-col items-center'>
          {render({ loading, members, sortedMembers, uuidv4 })}
          <div className='mt-4'>
            <Button 
              isLoading={loading}
              colorScheme="green"
              width='300px'
              onClick={handleSortMembers}
            >
              {!!sortedMembers && !!sortedMembers.length ? 'Sortear otra vez' : 'Sortear'}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamList
