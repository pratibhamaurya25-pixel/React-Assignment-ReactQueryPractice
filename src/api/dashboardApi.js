export async function fetchProfile() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users/1'
  )

  if (!res.ok) {
    throw new Error('Profile fetch failed')
  }

  const rawProfile = await res.json()

  return {
    name: rawProfile.name,
    role: rawProfile.company.name
  }
}

export async function fetchStats() {
  const res = await fetch(
    'https://api.github.com/repos/facebook/react'
  )

  if (!res.ok) {
    throw new Error('Stats fetch failed')
  }

  const rawStats = await res.json()

  return {
    activeUsers: rawStats.stargazers_count,
    sales: rawStats.forks_count
  }
}