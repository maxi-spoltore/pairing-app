import React from 'react'
import TeamList from '../TeamList'

const PairProgramming = () => {
  return (
    <div>
      <h3 className='text-2xl md:text-4xl font-bold w-7/12 ml-4 mt-4 md:mx-auto'>Pair Programming</h3>
      <TeamList 
        render={({ loading, members, sortedMembers, uuidv4 }) => (
          <>
            {!sortedMembers?.length && (
              <div className='w-10/12 md:w-4/12 grid grid-flow-col auto-cols-auto gap-6'>
                <ul className='w-full'>
                  {members.map(member => {
                    return (
                      <li 
                        className='w-full bg-green-400 rounded-lg p-4 mb-4 text-2xl font-semibold capitalize tracking-wide overflow-hidden'
                        key={uuidv4()}
                      >
                        {member.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {!loading && !!sortedMembers && !!sortedMembers.length && (
              <div className='w-10/12 md:w-4/12'>
                <ul className='w-full grid grid-cols-2 gap-6 mb-4'>
                  {sortedMembers.map(member => {
                    return (
                      <li 
                        className={`w-full ${member.name ? 'bg-green-400 rounded-lg ': ''}p-4 text-2xl font-semibold capitalize tracking-wide overflow-hidden`}
                        key={uuidv4()}
                      >
                        {member.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </>
        )}
      />
    </div>
  )
}

export default PairProgramming
