import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { 
  MapPin, 
  Plus, 
  Edit, 
  Trash2, 
  Clock,
  DollarSign,
  Settings,
  Power,
  Calendar
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const courts = [
  {
    id: 1,
    name: "Court 1",
    sport: "Badminton",
    type: "Indoor",
    status: "active",
    currentBooking: "Rahul Sharma",
    nextSlot: "11:00 AM",
    pricePerHour: 500,
    amenities: ["Air Conditioning", "LED Lighting", "Wooden Floor"],
    operatingHours: "06:00 AM - 10:00 PM",
    todayBookings: 8,
    todayRevenue: 4000
  },
  {
    id: 2,
    name: "Court 2",
    sport: "Badminton",
    type: "Indoor",
    status: "active",
    currentBooking: null,
    nextSlot: "11:00 AM",
    pricePerHour: 500,
    amenities: ["Air Conditioning", "LED Lighting", "Wooden Floor"],
    operatingHours: "06:00 AM - 10:00 PM",
    todayBookings: 6,
    todayRevenue: 3000
  },
  {
    id: 3,
    name: "Court 3",
    sport: "Tennis",
    type: "Outdoor",
    status: "active",
    currentBooking: "Priya Mehta",
    nextSlot: "12:00 PM",
    pricePerHour: 800,
    amenities: ["Night Lighting", "Clay Surface"],
    operatingHours: "06:00 AM - 09:00 PM",
    todayBookings: 5,
    todayRevenue: 4000
  },
  {
    id: 4,
    name: "Court 4",
    sport: "Basketball",
    type: "Outdoor",
    status: "maintenance",
    currentBooking: null,
    nextSlot: null,
    pricePerHour: 1200,
    amenities: ["Night Lighting", "Concrete Surface"],
    operatingHours: "06:00 AM - 10:00 PM",
    todayBookings: 0,
    todayRevenue: 0
  },
  {
    id: 5,
    name: "Court 5",
    sport: "Squash",
    type: "Indoor",
    status: "active",
    currentBooking: "Amit Kumar",
    nextSlot: "10:00 AM",
    pricePerHour: 600,
    amenities: ["Air Conditioning", "Glass Wall"],
    operatingHours: "07:00 AM - 09:00 PM",
    todayBookings: 4,
    todayRevenue: 2400
  },
  {
    id: 6,
    name: "Court 6",
    sport: "Tennis",
    type: "Indoor",
    status: "active",
    currentBooking: null,
    nextSlot: "03:00 PM",
    pricePerHour: 900,
    amenities: ["Air Conditioning", "Hard Court"],
    operatingHours: "06:00 AM - 10:00 PM",
    todayBookings: 7,
    todayRevenue: 6300
  },
];

export function CourtManagement() {
  const [selectedCourt, setSelectedCourt] = useState<typeof courts[0] | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addCourtOpen, setAddCourtOpen] = useState(false);

  const totalCourts = courts.length;
  const activeCourts = courts.filter(c => c.status === "active").length;
  const totalRevenue = courts.reduce((sum, c) => sum + c.todayRevenue, 0);
  const totalBookings = courts.reduce((sum, c) => sum + c.todayBookings, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Court Management</h1>
          <p className="text-muted-foreground mt-1">Manage venue courts and facilities</p>
        </div>
        <Dialog open={addCourtOpen} onOpenChange={setAddCourtOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 w-full lg:w-auto">
              <Plus className="w-4 h-4" />
              Add New Court
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Court</DialogTitle>
              <DialogDescription>Create a new court for your venue</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Court Name</Label>
                  <Input placeholder="e.g., Court 7" />
                </div>
                <div className="space-y-2">
                  <Label>Sport Type</Label>
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
                      <SelectItem value="Volleyball">Volleyball</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Court Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Indoor">Indoor</SelectItem>
                      <SelectItem value="Outdoor">Outdoor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Price per Hour (₹)</Label>
                  <Input type="number" placeholder="500" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label>Operating Hours</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Start time (e.g., 06:00 AM)" />
                    <Input placeholder="End time (e.g., 10:00 PM)" />
                  </div>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label>Surface Type</Label>
                  <Input placeholder="e.g., Wooden Floor, Clay, Concrete" />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label>Amenities (comma separated)</Label>
                  <Textarea 
                    placeholder="e.g., Air Conditioning, LED Lighting, Wooden Floor" 
                    rows={3}
                  />
                </div>
                <div className="space-y-2 col-span-2">
                  <Label>Description (Optional)</Label>
                  <Textarea 
                    placeholder="Add any additional details about the court..." 
                    rows={2}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select defaultValue="active">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAddCourtOpen(false)}>Cancel</Button>
              <Button onClick={() => setAddCourtOpen(false)}>Add Court</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-semibold">{totalCourts}</p>
              <p className="text-sm text-muted-foreground mt-1">Total Courts</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-semibold text-green-600">{activeCourts}</p>
              <p className="text-sm text-muted-foreground mt-1">Active Courts</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-semibold">{totalBookings}</p>
              <p className="text-sm text-muted-foreground mt-1">Today's Bookings</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-3xl font-semibold">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mt-1">Today's Revenue</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courts.map((court) => (
          <Card key={court.id} className={court.status === "maintenance" ? "opacity-60" : ""}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {court.name}
                    {court.status === "maintenance" && (
                      <Badge variant="destructive">Maintenance</Badge>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline">{court.sport}</Badge>
                    <Badge variant="secondary">{court.type}</Badge>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setSelectedCourt(court)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Edit Court Details</DialogTitle>
                        <DialogDescription>Update court information and settings</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Court Name</Label>
                            <Input defaultValue={court.name} />
                          </div>
                          <div className="space-y-2">
                            <Label>Sport Type</Label>
                            <Select defaultValue={court.sport}>
                              <SelectTrigger>
                                <SelectValue />
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
                            <Label>Court Type</Label>
                            <Select defaultValue={court.type}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Indoor">Indoor</SelectItem>
                                <SelectItem value="Outdoor">Outdoor</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Price per Hour</Label>
                            <Input type="number" defaultValue={court.pricePerHour} />
                          </div>
                          <div className="space-y-2 col-span-2">
                            <Label>Operating Hours</Label>
                            <Input defaultValue={court.operatingHours} />
                          </div>
                          <div className="space-y-2 col-span-2">
                            <Label>Amenities (comma separated)</Label>
                            <Textarea defaultValue={court.amenities.join(", ")} />
                          </div>
                          <div className="space-y-2 col-span-2">
                            <Label>Status</Label>
                            <Select defaultValue={court.status}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="maintenance">Maintenance</SelectItem>
                                <SelectItem value="disabled">Disabled</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button>Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Switch checked={court.status === "active"} />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Current Status */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Current Status</span>
                  <Badge variant={court.currentBooking ? "default" : "secondary"}>
                    {court.currentBooking ? "Occupied" : "Available"}
                  </Badge>
                </div>
                {court.currentBooking ? (
                  <p className="text-sm text-muted-foreground">Player: {court.currentBooking}</p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Next Slot: {court.nextSlot || "No bookings"}
                  </p>
                )}
              </div>

              {/* Pricing & Hours */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Price/Hour</span>
                  </div>
                  <p className="font-semibold">₹{court.pricePerHour}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Operating</span>
                  </div>
                  <p className="font-semibold text-sm">{court.operatingHours}</p>
                </div>
              </div>

              {/* Today's Stats */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Bookings Today</p>
                  <p className="text-lg font-semibold">{court.todayBookings}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Revenue Today</p>
                  <p className="text-lg font-semibold">₹{court.todayRevenue}</p>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Amenities</p>
                <div className="flex flex-wrap gap-1">
                  {court.amenities.map((amenity) => (
                    <Badge key={amenity} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" className="flex-1 gap-2" size="sm">
                  <Calendar className="w-4 h-4" />
                  View Schedule
                </Button>
                <Button variant="outline" className="flex-1 gap-2" size="sm">
                  <Settings className="w-4 h-4" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}