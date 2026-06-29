import { useQuery } from '@tanstack/react-query'
import { fetchProfile, fetchStats } from '../api/dashboardApi'

function Dashboard() {
  const {
    data: profile,
    isLoading: profileLoading,
    error: profileError
  } = useQuery({
    queryKey: ['profile'],
    queryFn: fetchProfile
  })

  const {
    data: stats,
    isLoading: statsLoading,
    error: statsError
  } = useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats
  })

  if (profileLoading || statsLoading) {
    return <div>Loading dashboard...</div>
  }

  if (profileError || statsError) {
    return <div>Error loading dashboard</div>
  }

  return (
    <div className="dashboard">
      <header>
        <h2>Welcome back, {profile?.name}</h2>
        <p>Role: {profile?.role}</p>
      </header>

      <section className="stats-grid">
        <div className="stat-card">
          Active Users: {stats?.activeUsers}
        </div>

        <div className="stat-card">
          Monthly Sales: ${stats?.sales}
        </div>
      </section>
    </div>
  )
}

export default Dashboard;