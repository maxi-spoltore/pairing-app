import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { sortMembers } from '../../utils'
import { Button } from "@chakra-ui/react"
import ReactTooltip from 'react-tooltip'
import { useTeamState } from '../TeamContext'
import GoBack from '../GoBack'
import WithTranslation from '../hocs/WithTranslation'

const TeamList = ({render, t}) => {
  const { members } = useTeamState()
  const [loading, setLoading] = useState(false);
  const [sortedMembers, setSortedMembers] = useState([]);
  const [sortError, setSortError] = useState(false);

  const handleSortMembers = () => {
    if (members.length < 2) {
      setSortError(true);
      return;
    }
    setLoading(true)
    setSortedMembers([])
    const newSortedMembers = sortMembers(members)
    
    return setTimeout(() => { 
      setSortedMembers(newSortedMembers);
      setLoading(false);
      setSortError(false);
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
              data-tip={t('sortBtn.tooltipErrMsg')}
              onClick={handleSortMembers}
            >
            {sortError && (
              <ReactTooltip
                place="top"
                type="error"
                effect="solid"
              />
            )}
              {!!sortedMembers && !!sortedMembers.length ? t('sortBtn.again') : t('sortBtn.init')}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WithTranslation(TeamList)
