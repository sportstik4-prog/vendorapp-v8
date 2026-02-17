import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar as CalendarIcon, List, Filter, Download, CheckCircle2, XCircle, Clock, User, MapPin, Phone, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const bookings = [
  {
    id: "BK001",
    player: "Rahul Sharma",
    phone: "+91 98765 43210",
    court: "Court 1",
    sport: "Badminton",
    date: "2026-02-17",
    time: "09:00 AM - 10:00 AM",
    status: "confirmed",
    amount: 500,
    paymentStatus: "paid",
    type: "Full Court"
  },
  {
    id: "BK002",
    player: "Priya Mehta",
    phone: "+91 98765 43211",
    court: "Court 3",
    sport: "Tennis",
    date: "2026-02-17",
    time: "10:00 AM - 11:00 AM",
    status: "confirmed",
    amount: 800,
    paymentStatus: "paid",
    type: "Full Court"
  },
  {
    id: "BK003",
    player: "Amit Kumar",
    phone: "+91 98765 43212",
    court: "Court 2",
    sport: "Badminton",
    date: "2026-02-17",
    time: "11:00 AM - 12:00 PM",
    status: "pending",
    amount: 500,
    paymentStatus: "pending",
    type: "Split Cost"
  },
  {
    id: "BK004",
    player: "Sneha Reddy",
    phone: "+91 98765 43213",
    court: "Court 5",
    sport: "Squash",
    date: "2026-02-18",
    time: "03:00 PM - 04:00 PM",
    status: "confirmed",
    amount: 600,
    paymentStatus: "paid",
    type: "Full Court"
  },
];

const timeSlots = [
  "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
];

const courts = ["Court 1", "Court 2", "Court 3", "Court 4", "Court 5", "Court 6"];

export function BookingManagement() {
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedCourt, setSelectedCourt] = useState<string>("all");
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [selectedBooking, setSelectedBooking] = useState<typeof bookings[0] | null>(null);
  const [newBookingOpen, setNewBookingOpen] = useState(false);

  const getBookingForSlot = (court: string, time: string) => {
    return bookings.find(
      (b) => b.court === court && b.time.startsWith(time) && b.date === format(selectedDate, "yyyy-MM-dd")
    );
  };

  const filteredBookings = bookings.filter((booking) => {
    if (selectedCourt !== "all" && booking.court !== selectedCourt) return false;
    if (selectedSport !== "all" && booking.sport !== selectedSport) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Booking Management</h1>
          <p className="text-muted-foreground mt-1">Manage and track all venue bookings</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Dialog open={newBookingOpen} onOpenChange={setNewBookingOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                New Booking
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Create New Booking</DialogTitle>
                <DialogDescription>Add a new booking for your venue</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 col-span-2">
                    <Label>Player Name</Label>
                    <Input placeholder="Enter player name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email (Optional)</Label>
                    <Input type="email" placeholder="player@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label>Sport</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sport" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Badminton">Badminton</SelectItem>
                        <SelectItem value="Tennis">Tennis</SelectItem>
                        <SelectItem value="Basketball">Basketball</SelectItem>
                        <SelectItem value="Squash">Squash</SelectItem>
                        <SelectItem value="Football">Football</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Court</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select court" />
                      </SelectTrigger>
                      <SelectContent>
                        {courts.map((court) => (
                          <SelectItem key={court} value={court}>{court}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {format(selectedDate, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => date && setSelectedDate(date)}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Start Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select start time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Duration (Hours)</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Hour</SelectItem>
                        <SelectItem value="1.5">1.5 Hours</SelectItem>
                        <SelectItem value="2">2 Hours</SelectItem>
                        <SelectItem value="2.5">2.5 Hours</SelectItem>
                        <SelectItem value="3">3 Hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Booking Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full Court">Full Court</SelectItem>
                        <SelectItem value="Split Cost">Split Cost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Amount (₹)</Label>
                    <Input type="number" placeholder="500" />
                  </div>
                  <div className="space-y-2">
                    <Label>Payment Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="partial">Partial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 col-span-2">
                    <Label>Notes (Optional)</Label>
                    <Textarea placeholder="Add any additional notes..." rows={3} />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setNewBookingOpen(false)}>
                  Cancel
                </Button>
                <Button className="flex-1" onClick={() => setNewBookingOpen(false)}>
                  Create Booking
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="w-4 h-4" />
                {format(selectedDate, "MMM dd, yyyy")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => date && setSelectedDate(date)}
              />
            </PopoverContent>
          </Popover>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filters:</span>
            </div>
            <Select value={selectedCourt} onValueChange={setSelectedCourt}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Courts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courts</SelectItem>
                {courts.map((court) => (
                  <SelectItem key={court} value={court}>{court}</SelectItem>
                ))}
              </SelectContent>
            </Select>
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
        </CardContent>
      </Card>

      {/* View Toggle */}
      <Tabs value={view} onValueChange={(v) => setView(v as "calendar" | "list")}>
        <TabsList>
          <TabsTrigger value="calendar" className="gap-2">
            <CalendarIcon className="w-4 h-4" />
            Calendar View
          </TabsTrigger>
          <TabsTrigger value="list" className="gap-2">
            <List className="w-4 h-4" />
            List View
          </TabsTrigger>
        </TabsList>

        {/* Calendar View */}
        <TabsContent value="calendar" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-sm sticky left-0 bg-gray-50 z-10">Time</th>
                      {courts.map((court) => (
                        <th key={court} className="text-left p-4 font-medium text-sm">{court}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((time) => (
                      <tr key={time} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium text-sm sticky left-0 bg-white z-10">{time}</td>
                        {courts.map((court) => {
                          const booking = getBookingForSlot(court, time);
                          return (
                            <td key={`${court}-${time}`} className="p-2">
                              {booking ? (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <button
                                      className={`w-full p-2 rounded text-left text-xs ${
                                        booking.status === "confirmed"
                                          ? "bg-emerald-100 border border-emerald-300 hover:bg-emerald-200"
                                          : "bg-orange-100 border border-orange-300 hover:bg-orange-200"
                                      }`}
                                      onClick={() => setSelectedBooking(booking)}
                                    >
                                      <p className="font-medium truncate">{booking.player}</p>
                                      <p className="text-muted-foreground truncate">{booking.sport}</p>
                                    </button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Booking Details</DialogTitle>
                                      <DialogDescription>Booking ID: {booking.id}</DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <Label className="text-sm text-muted-foreground">Player Name</Label>
                                          <p className="font-medium">{booking.player}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm text-muted-foreground">Phone</Label>
                                          <p className="font-medium">{booking.phone}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm text-muted-foreground">Sport</Label>
                                          <p className="font-medium">{booking.sport}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm text-muted-foreground">Court</Label>
                                          <p className="font-medium">{booking.court}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm text-muted-foreground">Date & Time</Label>
                                          <p className="font-medium">{booking.date}</p>
                                          <p className="text-sm text-muted-foreground">{booking.time}</p>
                                        </div>
                                        <div>
                                          <Label className="text-sm text-muted-foreground">Amount</Label>
                                          <p className="font-medium">₹{booking.amount}</p>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                                          {booking.status}
                                        </Badge>
                                        <Badge variant={booking.paymentStatus === "paid" ? "default" : "destructive"}>
                                          {booking.paymentStatus}
                                        </Badge>
                                      </div>
                                      <div className="flex gap-2 pt-4">
                                        {booking.status === "pending" && (
                                          <Button className="flex-1">Accept Booking</Button>
                                        )}
                                        <Button variant="outline" className="flex-1">Mark Check-in</Button>
                                        <Button variant="destructive" className="flex-1">Cancel</Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              ) : (
                                <div className="w-full h-full min-h-[60px] border border-dashed border-gray-300 rounded flex items-center justify-center text-xs text-muted-foreground">
                                  Available
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* List View */}
        <TabsContent value="list" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredBookings.map((booking) => (
                  <div key={booking.id} className="p-4 hover:bg-gray-50">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{booking.id}</h3>
                          <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                            {booking.status}
                          </Badge>
                          <Badge variant={booking.paymentStatus === "paid" ? "default" : "destructive"}>
                            {booking.paymentStatus}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-muted-foreground" />
                            <span>{booking.player}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{booking.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <span>{booking.court} - {booking.sport}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span>{booking.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right mr-4">
                          <p className="font-semibold">₹{booking.amount}</p>
                          <p className="text-sm text-muted-foreground">{booking.type}</p>
                        </div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">View Details</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Booking Details</DialogTitle>
                              <DialogDescription>Booking ID: {booking.id}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-sm text-muted-foreground">Player Name</Label>
                                  <p className="font-medium">{booking.player}</p>
                                </div>
                                <div>
                                  <Label className="text-sm text-muted-foreground">Phone</Label>
                                  <p className="font-medium">{booking.phone}</p>
                                </div>
                                <div>
                                  <Label className="text-sm text-muted-foreground">Sport</Label>
                                  <p className="font-medium">{booking.sport}</p>
                                </div>
                                <div>
                                  <Label className="text-sm text-muted-foreground">Court</Label>
                                  <p className="font-medium">{booking.court}</p>
                                </div>
                                <div>
                                  <Label className="text-sm text-muted-foreground">Date & Time</Label>
                                  <p className="font-medium">{booking.date}</p>
                                  <p className="text-sm text-muted-foreground">{booking.time}</p>
                                </div>
                                <div>
                                  <Label className="text-sm text-muted-foreground">Amount</Label>
                                  <p className="font-medium">₹{booking.amount}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                                  {booking.status}
                                </Badge>
                                <Badge variant={booking.paymentStatus === "paid" ? "default" : "destructive"}>
                                  {booking.paymentStatus}
                                </Badge>
                              </div>
                              <div className="flex gap-2 pt-4">
                                {booking.status === "pending" && (
                                  <Button className="flex-1">Accept Booking</Button>
                                )}
                                <Button variant="outline" className="flex-1">Mark Check-in</Button>
                                <Button variant="destructive" className="flex-1">Cancel</Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}