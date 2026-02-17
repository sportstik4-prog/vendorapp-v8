import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Edit,
  Save,
  Camera,
  X,
  CheckCircle2,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function VenueProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [venueData, setVenueData] = useState({
    name: "Phoenix Sports Arena",
    address: "123 Sports Complex, Koramangala, Bangalore - 560034",
    phone: "+91 80 1234 5678",
    email: "info@phoenixsportsarena.com",
    description:
      "Premium multi-sport facility with state-of-the-art infrastructure. We offer badminton, tennis, basketball, and squash courts with professional coaching services.",
    operatingHours: "06:00 AM - 10:00 PM",
    weekendHours: "06:00 AM - 11:00 PM",
    rating: 4.7,
    totalReviews: 284,
    established: "2020",
    kycStatus: "verified",
    amenities: [
      "Air Conditioning",
      "LED Lighting",
      "Locker Rooms",
      "Shower Facilities",
      "Parking",
      "Cafeteria",
      "Pro Shop",
      "First Aid",
    ],
    sports: ["Badminton", "Tennis", "Basketball", "Squash"],
    cancellationPolicy:
      "Free cancellation up to 24 hours before booking time. 50% refund for cancellations within 24 hours.",
  });

  const stats = [
    { label: "Total Courts", value: "12", icon: Building2, color: "text-blue-600" },
    { label: "Total Bookings", value: "2,456", icon: Calendar, color: "text-emerald-600" },
    { label: "Active Players", value: "523", icon: Users, color: "text-purple-600" },
    { label: "Avg Rating", value: venueData.rating.toString(), icon: Star, color: "text-yellow-600" },
  ];

  const bankDetails = {
    accountName: "Phoenix Sports Arena Pvt Ltd",
    accountNumber: "1234567890",
    ifscCode: "HDFC0001234",
    bankName: "HDFC Bank",
    branch: "Koramangala, Bangalore",
    upiId: "phoenixsports@upi",
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Venue Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your venue information and settings</p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={() => setIsEditing(false)}>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${stat.color.replace("text-", "bg-")}/10`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* KYC Status */}
      <Card className="border-emerald-200 bg-emerald-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-600 rounded-full">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">KYC Status: Verified</h3>
              <p className="text-sm text-muted-foreground">
                Your venue is fully verified and active on the platform
              </p>
            </div>
            <Badge className="bg-emerald-600">Active</Badge>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="details">Venue Details</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="banking">Banking</TabsTrigger>
        </TabsList>

        {/* Details Tab */}
        <TabsContent value="details" className="mt-6 space-y-6">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Venue Name</Label>
                {isEditing ? (
                  <Input value={venueData.name} onChange={(e) => setVenueData({ ...venueData, name: e.target.value })} />
                ) : (
                  <p className="font-medium">{venueData.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Address</Label>
                {isEditing ? (
                  <Textarea value={venueData.address} onChange={(e) => setVenueData({ ...venueData, address: e.target.value })} />
                ) : (
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                    <p>{venueData.address}</p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  {isEditing ? (
                    <Input value={venueData.phone} onChange={(e) => setVenueData({ ...venueData, phone: e.target.value })} />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <p>{venueData.phone}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  {isEditing ? (
                    <Input type="email" value={venueData.email} onChange={(e) => setVenueData({ ...venueData, email: e.target.value })} />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <p>{venueData.email}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                {isEditing ? (
                  <Textarea rows={4} value={venueData.description} onChange={(e) => setVenueData({ ...venueData, description: e.target.value })} />
                ) : (
                  <p className="text-muted-foreground">{venueData.description}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Weekday Operating Hours</Label>
                  {isEditing ? (
                    <Input value={venueData.operatingHours} onChange={(e) => setVenueData({ ...venueData, operatingHours: e.target.value })} />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <p>{venueData.operatingHours}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Weekend Operating Hours</Label>
                  {isEditing ? (
                    <Input value={venueData.weekendHours} onChange={(e) => setVenueData({ ...venueData, weekendHours: e.target.value })} />
                  ) : (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <p>{venueData.weekendHours}</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sports & Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Sports & Amenities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Sports Offered</Label>
                <div className="flex flex-wrap gap-2">
                  {venueData.sports.map((sport) => (
                    <Badge key={sport} variant="outline">
                      {sport}
                      {isEditing && (
                        <button className="ml-2">
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      + Add Sport
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Amenities</Label>
                <div className="flex flex-wrap gap-2">
                  {venueData.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary">
                      {amenity}
                      {isEditing && (
                        <button className="ml-2">
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      + Add Amenity
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policies */}
          <Card>
            <CardHeader>
              <CardTitle>Cancellation Policy</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea rows={3} value={venueData.cancellationPolicy} onChange={(e) => setVenueData({ ...venueData, cancellationPolicy: e.target.value })} />
              ) : (
                <p className="text-muted-foreground">{venueData.cancellationPolicy}</p>
              )}
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Venue Images</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative group">
                    <Camera className="w-8 h-8 text-gray-400" />
                    {isEditing && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Button variant="destructive" size="icon">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <button className="aspect-video border-2 border-dashed rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <div className="text-center">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Add Image</p>
                    </div>
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Venue Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Accept Online Bookings</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow users to book courts online through the platform
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Auto-Accept Bookings</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically confirm bookings without manual approval
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Enable Game Creation</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow players to create and join games at your venue
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Coaching Services</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable coaching and academy services at your venue
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Show in Premium Listings</Label>
                  <p className="text-sm text-muted-foreground">
                    Featured placement in search results (Premium feature)
                  </p>
                </div>
                <Switch />
              </div>

              <div className="pt-4 border-t">
                <Label className="text-base mb-3 block">Minimum Booking Duration</Label>
                <Select defaultValue="60">
                  <SelectTrigger className="w-full md:w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                    <SelectItem value="90">1.5 hours</SelectItem>
                    <SelectItem value="120">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-base mb-3 block">Advance Booking Limit</Label>
                <Select defaultValue="30">
                  <SelectTrigger className="w-full md:w-64">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="15">15 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Banking Tab */}
        <TabsContent value="banking" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Bank Account Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm text-muted-foreground">Account Name</Label>
                  <p className="font-medium">{bankDetails.accountName}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Account Number</Label>
                  <p className="font-medium">
                    {bankDetails.accountNumber.replace(/\d(?=\d{4})/g, "*")}
                  </p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">IFSC Code</Label>
                  <p className="font-medium">{bankDetails.ifscCode}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Bank Name</Label>
                  <p className="font-medium">{bankDetails.bankName}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Branch</Label>
                  <p className="font-medium">{bankDetails.branch}</p>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">UPI ID</Label>
                  <p className="font-medium">{bankDetails.upiId}</p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Banking details are managed through the admin panel. Contact support to update
                  your banking information.
                </p>
                <Button variant="outline">Contact Support</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Settlement Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">Weekly Settlements</p>
                    <p className="text-sm text-muted-foreground">Every Friday</p>
                  </div>
                  <Badge>Active</Badge>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground">Platform Commission</Label>
                  <p className="font-medium text-lg">10%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
