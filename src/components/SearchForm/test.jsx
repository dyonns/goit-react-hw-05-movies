<Route path='/mentorship/1-to-1/mentors/:id' element={<MentorDetail />}>
        <Route path='' element={<Navigate replace to='sessions' />} />
        <Route path='sessions' element={<MentorSessions />} />
        <Route path='sessions/form/:id' element={<MentorSessionForm />} />
        <Route
            path='sessions/templates'
            element={<MentorSessionTemplates />}
        />
        <Route path='sessions/:id' element={<MentorSessionForm />} />
        <Route path='chat' element={<MentorChat />} />
</Route>
    
    
navigate(/messages/${id}, {
      state: {
        previousPath: /profile/${id},
        name: 'Profile',
      },
    })