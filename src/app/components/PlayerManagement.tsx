import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Users,
  Search,
  Filter,
  Download,
  User,
  Phone,
  Mail,
  Calendar,
  Trophy,
  TrendingUp,
  MapPin,
  Star,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const players = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@email.com",
    sports: ["Badminton", "Tennis"],
    skillLevels: { Badminton: "Advanced", Tennis: "Intermediate" },
    totalBookings: 45,
    lastVisit: "2026-02-17",
    joinDate: "2025-08-15",
    totalSpent: 22500,
    rating: 4.8,
    gamesPlayed: 38,
    avatar: null,
    preferredCourt: "Court 1",
    coachingSessions: 12,
  },
  {
    id: 2,
    name: "Priya Mehta",
    phone: "+91 98765 43211",
    email: "priya.mehta@email.com",
    sports: ["Tennis"],
    skillLevels: { Tennis: "Advanced" },
    totalBookings: 62,
    lastVisit: "2026-02-17",
    joinDate: "2025-06-20",
    totalSpent: 49600,
    rating: 4.9,
    gamesPlayed: 52,
    avatar: null,
    preferredCourt: "Court 3",
    coachingSessions: 24,
  },
  {
    id: 3,
    name: "Amit Kumar",
    phone: "+91 98765 43212",
    email: "amit.kumar@email.com",
    sports: ["Badminton", "Squash"],
    skillLevels: { Badminton: "Intermediate", Squash: "Beginner" },
    totalBookings: 28,
    lastVisit: "2026-02-16",
    joinDate: "2025-10-10",
    totalSpent: 14000,
    rating: 4.6,
    gamesPlayed: 22,
    avatar: null,
    preferredCourt: "Court 2",
    coachingSessions: 8,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    phone: "+91 98765 43213",
    email: "sneha.reddy@email.com",
    sports: ["Squash", "Badminton"],
    skillLevels: { Squash: "Advanced", Badminton: "Intermediate" },
    totalBookings: 38,
    lastVisit: "2026-02-15",
    joinDate: "2025-07-05",
    totalSpent: 22800,
    rating: 4.7,
    gamesPlayed: 31,
    avatar: null,
    preferredCourt: "Court 5",
    coachingSessions: 16,
  },
  {
    id: 5,
    name: "Arjun Patel",
    phone: "+91 98765 43214",
    email: "arjun.patel@email.com",
    sports: ["Basketball", "Tennis"],
    skillLevels: { Basketball: "Advanced", Tennis: "Beginner" },
    totalBookings: 33,
    lastVisit: "2026-02-14",
    joinDate: "2025-09-12",
    totalSpent: 39600,
    rating: 4.5,
    gamesPlayed: 28,
    avatar: null,
    preferredCourt: "Court 4",
    coachingSessions: 5,
  },
  {
    id: 6,
    name: "Neha Singh",
    phone: "+91 98765 43215",
    email: "neha.singh@email.com",
    sports: ["Badminton"],
    skillLevels: { Badminton: "Beginner" },
    totalBookings: 15,
    lastVisit: "2026-02-13",
    joinDate: "2025-12-01",
    totalSpent: 7500,
    rating: 4.4,
    gamesPlayed: 12,
    avatar: null,
    preferredCourt: "Court 1",
    coachingSessions: 18,
  },
];

const bookingHistory = [
  {
    id: "BK001",
    playerId: 1,
    court: "Court 1",
    sport: "Badminton",
    date: "2026-02-17",
    time: "09:00 AM - 10:00 AM",
    amount: 500,
    status: "completed",
  },
  {
    id: "BK045",
    playerId: 1,
    court: "Court 3",
    sport: "Tennis",
    date: "2026-02-15",
    time: "05:00 PM - 06:00 PM",
    amount: 800,
    status: "completed",
  },
  {
    id: "BK032",
    playerId: 1,
    court: "Court 1",
    sport: "Badminton",
    date: "2026-02-12",
    time: "08:00 AM - 09:00 AM",
    amount: 500,
    status: "completed",
  },
];

export function PlayerManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [selectedPlayer, setSelectedPlayer] = useState<(typeof players)[0] | null>(null);

  const filteredPlayers = players.filter((player) => {
    const matchesSearch =
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.phone.includes(searchTerm) ||
      player.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSport =
      selectedSport === "all" || player.sports.includes(selectedSport);

    return matchesSearch && matchesSport;
  });

  const totalPlayers = players.length;
  const activeToday = players.filter((p) => p.lastVisit === "2026-02-17").length;
  const totalRevenue = players.reduce((sum, p) => sum + p.totalSpent, 0);
  const avgRating = (players.reduce((sum, p) => sum + p.rating, 0) / players.length).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Player Management</h1>
          <p className="text-muted-foreground mt-1">View and manage player profiles and history</p>
        </div>
        <Button variant="outline" className="gap-2 w-full lg:w-auto">
          <Download className="w-4 h-4" />
          Export Players
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{totalPlayers}</p>
                <p className="text-sm text-muted-foreground">Total Players</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{activeToday}</p>
                <p className="text-sm text-muted-foreground">Active Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Trophy className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">₹{(totalRevenue / 1000).toFixed(0)}k</p>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{avgRating}</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, phone, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Sports" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="Badminton">Badminton</SelectItem>
                  <SelectItem value="Tennis">Tennis</SelectItem>
                  <SelectItem value="Basketball">Basketball</SelectItem>
                  <SelectItem value="Squash">Squash</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Players List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredPlayers.map((player) => (
          <Card key={player.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={player.avatar || undefined} />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg">
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{player.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{player.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          · {player.gamesPlayed} games
                        </span>
                      </div>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedPlayer(player)}
                        >
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Player Profile</DialogTitle>
                          <DialogDescription>Complete player information and history</DialogDescription>
                        </DialogHeader>
                        {selectedPlayer && (
                          <div className="space-y-6">
                            {/* Player Info */}
                            <div className="flex items-start gap-4">
                              <Avatar className="w-20 h-20">
                                <AvatarImage src={selectedPlayer.avatar || undefined} />
                                <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl">
                                  {selectedPlayer.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold">{selectedPlayer.name}</h3>
                                <div className="flex items-center gap-1 mt-1">
                                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                  <span className="font-medium">{selectedPlayer.rating}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {selectedPlayer.sports.map((sport) => (
                                    <Badge key={sport} variant="outline">
                                      {sport} - {selectedPlayer.skillLevels[sport as keyof typeof selectedPlayer.skillLevels]}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label className="text-sm text-muted-foreground">Phone</Label>
                                <p className="font-medium">{selectedPlayer.phone}</p>
                              </div>
                              <div>
                                <Label className="text-sm text-muted-foreground">Email</Label>
                                <p className="font-medium">{selectedPlayer.email}</p>
                              </div>
                              <div>
                                <Label className="text-sm text-muted-foreground">Join Date</Label>
                                <p className="font-medium">{selectedPlayer.joinDate}</p>
                              </div>
                              <div>
                                <Label className="text-sm text-muted-foreground">Last Visit</Label>
                                <p className="font-medium">{selectedPlayer.lastVisit}</p>
                              </div>
                            </div>

                            {/* Stats */}
                            <Tabs defaultValue="overview">
                              <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="history">Booking History</TabsTrigger>
                              </TabsList>
                              <TabsContent value="overview" className="space-y-4 mt-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                  <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-muted-foreground">Total Bookings</p>
                                    <p className="text-2xl font-semibold mt-1">
                                      {selectedPlayer.totalBookings}
                                    </p>
                                  </div>
                                  <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-muted-foreground">Games Played</p>
                                    <p className="text-2xl font-semibold mt-1">
                                      {selectedPlayer.gamesPlayed}
                                    </p>
                                  </div>
                                  <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-muted-foreground">Total Spent</p>
                                    <p className="text-2xl font-semibold mt-1">
                                      ₹{selectedPlayer.totalSpent.toLocaleString()}
                                    </p>
                                  </div>
                                  <div className="p-4 bg-gray-50 rounded-lg">
                                    <p className="text-sm text-muted-foreground">Coaching</p>
                                    <p className="text-2xl font-semibold mt-1">
                                      {selectedPlayer.coachingSessions}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <Label className="text-sm text-muted-foreground">Preferred Court</Label>
                                  <p className="font-medium mt-1">{selectedPlayer.preferredCourt}</p>
                                </div>
                              </TabsContent>
                              <TabsContent value="history" className="mt-4">
                                <div className="space-y-3">
                                  {bookingHistory
                                    .filter((b) => b.playerId === selectedPlayer.id)
                                    .map((booking) => (
                                      <div key={booking.id} className="p-4 border rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                          <div>
                                            <p className="font-medium">{booking.id}</p>
                                            <p className="text-sm text-muted-foreground">
                                              {booking.date} · {booking.time}
                                            </p>
                                          </div>
                                          <Badge variant="default" className="bg-emerald-600">
                                            {booking.status}
                                          </Badge>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 text-sm">
                                          <div>
                                            <p className="text-muted-foreground">Court</p>
                                            <p className="font-medium">{booking.court}</p>
                                          </div>
                                          <div>
                                            <p className="text-muted-foreground">Sport</p>
                                            <p className="font-medium">{booking.sport}</p>
                                          </div>
                                          <div>
                                            <p className="text-muted-foreground">Amount</p>
                                            <p className="font-medium">₹{booking.amount}</p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              </TabsContent>
                            </Tabs>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="truncate">{player.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="truncate">{player.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{player.preferredCourt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Last: {player.lastVisit}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {player.sports.map((sport) => (
                      <Badge key={sport} variant="secondary" className="text-xs">
                        {sport}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Bookings</p>
                      <p className="font-semibold">{player.totalBookings}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Total Spent</p>
                      <p className="font-semibold">₹{player.totalSpent.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Coaching</p>
                      <p className="font-semibold">{player.coachingSessions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPlayers.length === 0 && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center text-muted-foreground">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No players found matching your search criteria.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
