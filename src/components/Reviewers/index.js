import React from 'react'
import TeamList from '../TeamList'

const Reviewers = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold w-7/12 m-auto mt-4'>PRs Cruzados</h3>
      <TeamList 
        render={({loading, members, sortedMembers, uuidv4}) => (
          <div className='w-4/12 grid grid-flow-col auto-cols-auto gap-6'>
            <ul className='w-full'>
              {members.map(member => {
                return (
                  <li 
                    className='w-full bg-green-400 rounded-lg p-4 mb-4 text-2xl font-semibold capitalize tracking-wide'
                    key={uuidv4()}
                  >
                    {member.name}
                  </li>
                )
              })}
            </ul>
            {!loading && !!sortedMembers && !!sortedMembers.length && (
              <ul className='w-full'>
                {sortedMembers.map(member => {
                  return (
                    <li 
                      className={`w-full ${member.name ? 'bg-green-400 rounded-lg ': ''}p-4 mb-4 text-2xl font-semibold capitalize tracking-wide`}
                      key={uuidv4()}
                    >
                      {member.name}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )}
      />
    </div>
  )
}

export default Reviewers