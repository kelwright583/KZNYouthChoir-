import { Card, CardContent, CardHeader, CardTitle } from '@kzn-youth-choir/ui'

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-neutral-500">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-neutral-500">News Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-neutral-500">Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-neutral-500">Pending Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-neutral-500">Audition Signups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-500">Activity feed will appear here</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href="/admin/cms/news" className="block p-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                  Create News Post
                </a>
                <a href="/admin/events" className="block p-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                  Create Event
                </a>
                <a href="/admin/communications" className="block p-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                  Send Message
                </a>
                <a href="/admin/auditions" className="block p-3 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50">
                  View Audition Signups
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

