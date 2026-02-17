import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Bell,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  TrendingUp,
  Users,
  Wallet,
  AlertCircle,
  Info,
  Trash2,
} from "lucide-react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const notifications = [
  {
    id: 1,
    type: "booking",
    title: "New Booking Confirmed",
    message: "Rahul Sharma booked Court 1 for Badminton",
    time: "5 minutes ago",
    date: "2026-02-17",
    isRead: false,
    priority: "normal",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    type: "cancellation",
    title: "Booking Cancelled",
    message: "Amit Kumar cancelled booking for Court 2",
    time: "15 minutes ago",
    date: "2026-02-17",
    isRead: false,
    priority: "high",
    icon: XCircle,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    type: "payment",
    title: "Settlement Processed",
    message: "Your weekly settlement of ₹58,860 has been processed",
    time: "1 hour ago",
    date: "2026-02-17",
    isRead: false,
    priority: "high",
    icon: Wallet,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    type: "coaching",
    title: "Coaching Session Starting Soon",
    message: "Advanced Badminton Batch session starts in 30 minutes",
    time: "2 hours ago",
    date: "2026-02-17",
    isRead: true,
    priority: "normal",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 5,
    type: "game",
    title: "Game Created at Your Venue",
    message: "Priya Mehta created a tennis game for 4 players",
    time: "3 hours ago",
    date: "2026-02-17",
    isRead: true,
    priority: "normal",
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 6,
    type: "refund",
    title: "Refund Request",
    message: "New refund request from Raj Malhotra for ₹800",
    time: "4 hours ago",
    date: "2026-02-17",
    isRead: false,
    priority: "high",
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: 7,
    type: "revenue",
    title: "Daily Revenue Update",
    message: "Today's revenue: ₹12,450 (+12.5% from yesterday)",
    time: "5 hours ago",
    date: "2026-02-17",
    isRead: true,
    priority: "normal",
    icon: TrendingUp,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    id: 8,
    type: "booking",
    title: "Upcoming Booking Reminder",
    message: "Court 4 booking at 02:00 PM - Team Warriors",
    time: "Yesterday",
    date: "2026-02-16",
    isRead: true,
    priority: "normal",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 9,
    type: "system",
    title: "System Maintenance",
    message: "Scheduled maintenance on Feb 20, 2:00 AM - 4:00 AM",
    time: "Yesterday",
    date: "2026-02-16",
    isRead: true,
    priority: "normal",
    icon: Info,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
];

export function Notifications() {
  const [notificationList, setNotificationList] = useState(notifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [whatsappEnabled, setWhatsappEnabled] = useState(false);

  const filteredNotifications =
    filter === "unread"
      ? notificationList.filter((n) => !n.isRead)
      : notificationList;

  const unreadCount = notificationList.filter((n) => !n.isRead).length;

  const markAsRead = (id: number) => {
    setNotificationList((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotificationList((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const deleteNotification = (id: number) => {
    setNotificationList((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Notifications</h1>
          <p className="text-muted-foreground mt-1">
            Stay updated with venue activities and alerts
          </p>
        </div>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {unreadCount} unread
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="notifications">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Notifications Tab */}
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Notifications</CardTitle>
                <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | "unread")}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="unread">
                      Unread {unreadCount > 0 && `(${unreadCount})`}
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredNotifications.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border transition-all ${
                        notification.isRead
                          ? "bg-white hover:bg-gray-50"
                          : "bg-blue-50 border-blue-200 hover:bg-blue-100"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${notification.bgColor}`}>
                          <Icon className={`w-5 h-5 ${notification.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4 className="font-semibold">{notification.title}</h4>
                            <div className="flex items-center gap-2">
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                              )}
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {notification.time}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center gap-2">
                            {!notification.isRead && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="h-7 text-xs"
                              >
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                                Mark as read
                              </Button>
                            )}
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => deleteNotification(notification.id)}
                              className="h-7 text-xs text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-3 h-3 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {filteredNotifications.length === 0 && (
                  <div className="py-12 text-center text-muted-foreground">
                    <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No notifications to show</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="mt-6">
          <div className="space-y-6">
            {/* Notification Channels */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Channels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications" className="text-base">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive push notifications on your device
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushEnabled}
                    onCheckedChange={setPushEnabled}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications" className="text-base">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailEnabled}
                    onCheckedChange={setEmailEnabled}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="whatsapp-notifications" className="text-base">
                      WhatsApp Notifications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates on WhatsApp
                    </p>
                  </div>
                  <Switch
                    id="whatsapp-notifications"
                    checked={whatsappEnabled}
                    onCheckedChange={setWhatsappEnabled}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Notification Types */}
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    id: "booking",
                    title: "Booking Updates",
                    description: "New bookings, cancellations, and modifications",
                    enabled: true,
                  },
                  {
                    id: "payment",
                    title: "Payment & Settlements",
                    description: "Payment confirmations and settlement updates",
                    enabled: true,
                  },
                  {
                    id: "coaching",
                    title: "Coaching Sessions",
                    description: "Session reminders and updates",
                    enabled: true,
                  },
                  {
                    id: "games",
                    title: "Game Activities",
                    description: "Game creations and player updates",
                    enabled: false,
                  },
                  {
                    id: "refunds",
                    title: "Refund Requests",
                    description: "New refund requests and approvals",
                    enabled: true,
                  },
                  {
                    id: "revenue",
                    title: "Revenue Reports",
                    description: "Daily and weekly revenue summaries",
                    enabled: true,
                  },
                  {
                    id: "system",
                    title: "System Updates",
                    description: "Platform updates and maintenance notices",
                    enabled: false,
                  },
                ].map((pref) => (
                  <div key={pref.id} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor={pref.id} className="text-base">
                        {pref.title}
                      </Label>
                      <p className="text-sm text-muted-foreground">{pref.description}</p>
                    </div>
                    <Switch id={pref.id} defaultChecked={pref.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button>Save Preferences</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
