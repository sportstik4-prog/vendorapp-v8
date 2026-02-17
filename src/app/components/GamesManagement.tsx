import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Gamepad2,
  Users,
  Calendar,
  Clock,
  MapPin,
  Trophy,
  CheckCircle2,
  XCircle,
  User,
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

const games = [
  {
    id: "GM001",
    sport: "Badminton",
    court: "Court 1",
    date: "2026-02-17",
    time: "09:00 AM - 10:00 AM",
    totalPlayers: 4,
    currentPlayers: 4,
    skillLevel: "Advanced",
    costPerPlayer: 125,
    organizer: "Rahul Sharma",
    organizerPhone: "+91 98765 43210",
    status: "confirmed",
    visibility: "public",
    players: [
      { name: "Rahul Sharma", status: "confirmed", avatar: null },
      { name: "Priya Mehta", status: "confirmed", avatar: null },
      { name: "Amit Kumar", status: "confirmed", avatar: null },
      { name: "Sneha Reddy", status: "confirmed", avatar: null },
    ],
  },
  {
    id: "GM002",
    sport: "Tennis",
    court: "Court 3",
    date: "2026-02-17",
    time: "05:00 PM - 06:30 PM",
    totalPlayers: 4,
    currentPlayers: 3,
    skillLevel: "Intermediate",
    costPerPlayer: 200,
    organizer: "Arjun Patel",
    organizerPhone: "+91 98765 43214",
    status: "filling",
    visibility: "public",
    players: [
      { name: "Arjun Patel", status: "confirmed", avatar: null },
      { name: "Neha Singh", status: "confirmed", avatar: null },
      { name: "Rohit Verma", status: "confirmed", avatar: null },
      { name: "Waiting...", status: "waiting", avatar: null },
    ],
  },
  {
    id: "GM003",
    sport: "Basketball",
    court: "Court 4",
    date: "2026-02-18",
    time: "06:00 PM - 07:30 PM",
    totalPlayers: 10,
    currentPlayers: 8,
    skillLevel: "Intermediate",
    costPerPlayer: 120,
    organizer: "Vikram Singh",
    organizerPhone: "+91 98765 43220",
    status: "filling",
    visibility: "public",
    players: [
      { name: "Vikram Singh", status: "confirmed", avatar: null },
      { name: "Kavita Nair", status: "confirmed", avatar: null },
      { name: "Raj Malhotra", status: "confirmed", avatar: null },
      { name: "Ananya Sharma", status: "confirmed", avatar: null },
      { name: "Karan Joshi", status: "confirmed", avatar: null },
      { name: "Divya Patel", status: "confirmed", avatar: null },
      { name: "Aditya Kumar", status: "confirmed", avatar: null },
      { name: "Pooja Reddy", status: "confirmed", avatar: null },
    ],
  },
  {
    id: "GM004",
    sport: "Badminton",
    court: "Court 2",
    date: "2026-02-19",
    time: "07:00 AM - 08:00 AM",
    totalPlayers: 4,
    currentPlayers: 2,
    skillLevel: "Beginner",
    costPerPlayer: 125,
    organizer: "Meera Kapoor",
    organizerPhone: "+91 98765 43225",
    status: "filling",
    visibility: "invite-only",
    players: [
      { name: "Meera Kapoor", status: "confirmed", avatar: null },
      { name: "Sanjay Gupta", status: "confirmed", avatar: null },
      { name: "Waiting...", status: "waiting", avatar: null },
      { name: "Waiting...", status: "waiting", avatar: null },
    ],
  },
];

export function GamesManagement() {
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedGame, setSelectedGame] = useState<(typeof games)[0] | null>(null);

  const filteredGames = games.filter((game) => {
    const matchesSport = selectedSport === "all" || game.sport === selectedSport;
    const matchesStatus = selectedStatus === "all" || game.status === selectedStatus;
    return matchesSport && matchesStatus;
  });

  const totalGames = games.length;
  const confirmedGames = games.filter((g) => g.status === "confirmed").length;
  const totalPlayers = games.reduce((sum, g) => sum + g.currentPlayers, 0);
  const fillingGames = games.filter((g) => g.status === "filling").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Game Management</h1>
          <p className="text-muted-foreground mt-1">View and manage games hosted at your venue</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{totalGames}</p>
                <p className="text-sm text-muted-foreground">Total Games</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{confirmedGames}</p>
                <p className="text-sm text-muted-foreground">Confirmed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-50 rounded-lg">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{fillingGames}</p>
                <p className="text-sm text-muted-foreground">Filling Up</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{totalPlayers}</p>
                <p className="text-sm text-muted-foreground">Total Players</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium">Filters:</span>
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
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="filling">Filling Up</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Games List */}
      <div className="space-y-4">
        {filteredGames.map((game) => (
          <Card key={game.id}>
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{game.id}</h3>
                        <Badge variant="outline">{game.sport}</Badge>
                        <Badge
                          variant={game.status === "confirmed" ? "default" : "secondary"}
                          className={game.status === "confirmed" ? "bg-emerald-600" : "bg-orange-500"}
                        >
                          {game.status}
                        </Badge>
                        {game.visibility === "invite-only" && (
                          <Badge variant="outline" className="text-xs">
                            Invite Only
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Organized by {game.organizer}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{game.court}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{game.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{game.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-muted-foreground" />
                      <span>{game.skillLevel}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        <span className="font-semibold">{game.currentPlayers}</span>
                        <span className="text-muted-foreground">/{game.totalPlayers} players</span>
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold">₹{game.costPerPlayer}</span>
                      <span className="text-muted-foreground">/player</span>
                    </div>
                  </div>

                  {/* Players Preview */}
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Players:</p>
                    <div className="flex -space-x-2">
                      {game.players.slice(0, 5).map((player, idx) => (
                        <Avatar key={idx} className="w-8 h-8 border-2 border-background">
                          <AvatarImage src={player.avatar || undefined} />
                          <AvatarFallback
                            className={
                              player.status === "waiting"
                                ? "bg-gray-200 text-gray-500"
                                : "bg-emerald-100 text-emerald-700"
                            }
                          >
                            {player.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                      ))}
                      {game.players.length > 5 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-background flex items-center justify-center text-xs font-medium">
                          +{game.players.length - 5}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedGame(game)}
                      className="w-full lg:w-auto"
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Game Details</DialogTitle>
                      <DialogDescription>Game ID: {game.id}</DialogDescription>
                    </DialogHeader>
                    {selectedGame && (
                      <div className="space-y-6">
                        {/* Game Info */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm text-muted-foreground">Sport</Label>
                            <p className="font-medium">{selectedGame.sport}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Skill Level</Label>
                            <p className="font-medium">{selectedGame.skillLevel}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Court</Label>
                            <p className="font-medium">{selectedGame.court}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Status</Label>
                            <Badge
                              variant={selectedGame.status === "confirmed" ? "default" : "secondary"}
                              className={
                                selectedGame.status === "confirmed" ? "bg-emerald-600" : "bg-orange-500"
                              }
                            >
                              {selectedGame.status}
                            </Badge>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Date</Label>
                            <p className="font-medium">{selectedGame.date}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Time</Label>
                            <p className="font-medium">{selectedGame.time}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Cost per Player</Label>
                            <p className="font-medium">₹{selectedGame.costPerPlayer}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-muted-foreground">Visibility</Label>
                            <p className="font-medium capitalize">{selectedGame.visibility}</p>
                          </div>
                        </div>

                        {/* Organizer Info */}
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <Label className="text-sm text-muted-foreground">Organizer</Label>
                          <p className="font-medium">{selectedGame.organizer}</p>
                          <p className="text-sm text-muted-foreground">{selectedGame.organizerPhone}</p>
                        </div>

                        {/* Players List */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <Label className="text-sm font-medium">
                              Players ({selectedGame.currentPlayers}/{selectedGame.totalPlayers})
                            </Label>
                          </div>
                          <div className="space-y-2">
                            {selectedGame.players.map((player, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-3 border rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <Avatar className="w-10 h-10">
                                    <AvatarImage src={player.avatar || undefined} />
                                    <AvatarFallback
                                      className={
                                        player.status === "waiting"
                                          ? "bg-gray-200 text-gray-500"
                                          : "bg-emerald-100 text-emerald-700"
                                      }
                                    >
                                      {player.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")
                                        .slice(0, 2)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{player.name}</p>
                                    {player.status !== "waiting" && (
                                      <p className="text-xs text-muted-foreground">
                                        Payment confirmed
                                      </p>
                                    )}
                                  </div>
                                </div>
                                {player.status === "confirmed" ? (
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                ) : (
                                  <Clock className="w-5 h-5 text-gray-400" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-4 border-t">
                          <Button variant="outline" className="flex-1">
                            Mark Attendance
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Contact Organizer
                          </Button>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <Card>
          <CardContent className="py-12">
            <div className="text-center text-muted-foreground">
              <Gamepad2 className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No games found matching your filters.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
