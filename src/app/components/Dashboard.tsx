import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  Clock,
  ArrowUp,
  ArrowDown,
  MapPin,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";

const stats = [
  { 
    title: "Today's Revenue", 
    value: "₹12,450", 
    change: "+12.5%", 
    trend: "up",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  { 
    title: "Today's Bookings", 
    value: "24", 
    change: "+8.3%", 
    trend: "up",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  { 
    title: "Live Courts", 
    value: "6/12", 
    change: "50% occupied",
    trend: "neutral",
    icon: MapPin,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  { 
    title: "Active Players", 
    value: "36", 
    change: "+5 from yesterday",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
];

const upcomingBookings = [
  {
    id: 1,
    time: "09:00 AM",
    court: "Court 1 - Badminton",
    player: "Rahul Sharma",
    status: "confirmed",
    amount: "₹500"
  },
  {
    id: 2,
    time: "10:00 AM",
    court: "Court 3 - Tennis",
    player: "Priya Mehta",
    status: "confirmed",
    amount: "₹800"
  },
  {
    id: 3,
    time: "11:00 AM",
    court: "Court 2 - Badminton",
    player: "Amit Kumar",
    status: "pending",
    amount: "₹500"
  },
  {
    id: 4,
    time: "02:00 PM",
    court: "Court 4 - Basketball",
    player: "Team Warriors",
    status: "confirmed",
    amount: "₹1,200"
  },
];

const coachingSessions = [
  {
    id: 1,
    time: "08:00 AM",
    coach: "Coach Vikram",
    sport: "Badminton",
    students: 8,
    type: "Group Session"
  },
  {
    id: 2,
    time: "05:00 PM",
    coach: "Coach Anita",
    sport: "Tennis",
    students: 1,
    type: "Personal Training"
  },
  {
    id: 3,
    time: "06:00 PM",
    coach: "Coach Rajesh",
    sport: "Basketball",
    students: 12,
    type: "Academy Batch"
  },
];

const courtOccupancy = [
  { name: "Court 1 - Badminton", occupied: true, currentBooking: "Rahul S.", endTime: "10:00 AM" },
  { name: "Court 2 - Badminton", occupied: false, nextBooking: "11:00 AM" },
  { name: "Court 3 - Tennis", occupied: true, currentBooking: "Priya M.", endTime: "11:30 AM" },
  { name: "Court 4 - Basketball", occupied: false, nextBooking: "02:00 PM" },
  { name: "Court 5 - Squash", occupied: true, currentBooking: "Amit K.", endTime: "09:30 AM" },
  { name: "Court 6 - Tennis", occupied: false, nextBooking: "03:00 PM" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {stat.trend === "up" && <ArrowUp className="w-4 h-4 text-green-600" />}
                      {stat.trend === "down" && <ArrowDown className="w-4 h-4 text-red-600" />}
                      <span className={`text-sm ${
                        stat.trend === "up" ? "text-green-600" : 
                        stat.trend === "down" ? "text-red-600" : 
                        "text-muted-foreground"
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Live Court Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Live Court Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courtOccupancy.map((court) => (
              <div 
                key={court.name} 
                className={`p-4 rounded-lg border-2 ${
                  court.occupied 
                    ? "border-emerald-200 bg-emerald-50" 
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-medium text-sm">{court.name}</h4>
                  {court.occupied ? (
                    <Badge variant="default" className="bg-emerald-600">Occupied</Badge>
                  ) : (
                    <Badge variant="outline">Available</Badge>
                  )}
                </div>
                {court.occupied ? (
                  <div className="text-sm text-muted-foreground">
                    <p>Current: {court.currentBooking}</p>
                    <p>Until: {court.endTime}</p>
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground">
                    <p>Next booking: {court.nextBooking}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bookings and Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Bookings */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Upcoming Bookings</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{booking.time}</span>
                      {booking.status === "confirmed" ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-orange-600" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{booking.court}</p>
                    <p className="text-sm">{booking.player}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{booking.amount}</p>
                    <Badge 
                      variant={booking.status === "confirmed" ? "default" : "secondary"}
                      className="mt-1"
                    >
                      {booking.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coaching Sessions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Coaching Sessions</CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coachingSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{session.time}</span>
                      <Badge variant="outline" className="text-xs">{session.sport}</Badge>
                    </div>
                    <p className="text-sm">{session.coach}</p>
                    <p className="text-sm text-muted-foreground">{session.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{session.students}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Overview */}
      <Card>
        <CardHeader>
          <CardTitle>This Week's Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { day: "Monday", amount: 8500, bookings: 18 },
              { day: "Tuesday", amount: 9200, bookings: 21 },
              { day: "Wednesday", amount: 7800, bookings: 16 },
              { day: "Thursday", amount: 10500, bookings: 23 },
              { day: "Friday", amount: 11200, bookings: 25 },
              { day: "Saturday", amount: 15800, bookings: 32 },
              { day: "Sunday", amount: 14200, bookings: 28 },
            ].map((day) => {
              const percentage = (day.amount / 15800) * 100;
              return (
                <div key={day.day}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{day.day}</span>
                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">₹{day.amount.toLocaleString()}</span>
                      {" · "}
                      {day.bookings} bookings
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
