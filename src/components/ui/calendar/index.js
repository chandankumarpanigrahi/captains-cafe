import React, { useState, useMemo, useCallback } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Clock,
    MapPin,
    User,
    Tag,
    X,
    Edit,
    Trash2,
    Search,
    Filter,
    Calendar as CalendarIcon,
    Save,
    MoreVertical,
    Repeat
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// Constants
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAY_NAMES_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CATEGORIES = {
    Work: '#6366f1',
    Personal: '#10b981',
    Business: '#f59e0b',
    Health: '#ef4444',
    Family: '#8b5cf6',
    Travel: '#06b6d4'
};

// Utility functions
const dateUtils = {
    isSameDay: (date1, date2) => {
        return date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear();
    },
    isToday: (date) => dateUtils.isSameDay(date, new Date()),
    daysInMonth: (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
    firstDayOfMonth: (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
    addDays: (date, days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days),
    addMonths: (date, months) => new Date(date.getFullYear(), date.getMonth() + months, date.getDate()),
    addYears: (date, years) => new Date(date.getFullYear() + years, date.getMonth(), date.getDate()),
    formatTime: (date) => date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
    formatDate: (date) => date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }),
    formatDateShort: (date) => date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
};

const FullCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState('month');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showEventForm, setShowEventForm] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    // Form refs instead of state for each field
    const formRefs = {
        title: React.useRef(null),
        startDate: React.useRef(null),
        startTime: React.useRef(null),
        endDate: React.useRef(null),
        endTime: React.useRef(null),
        category: React.useRef(null),
        location: React.useRef(null),
        attendees: React.useRef(null),
        description: React.useRef(null),
        recurring: React.useRef(null)
    };

    // Sample events
    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'Team Meeting',
            start: new Date(2025, 9, 15, 10, 0),
            end: new Date(2025, 9, 15, 11, 30),
            category: 'Work',
            location: 'Conference Room A',
            attendees: ['John Doe', 'Sarah Wilson', 'Mike Chen'],
            description: 'Quarterly review and planning session',
            recurring: false
        },
        {
            id: 2,
            title: 'Lunch with Client',
            start: new Date(2025, 9, 20, 12, 0),
            end: new Date(2025, 9, 20, 13, 30),
            category: 'Business',
            location: 'Downtown Bistro',
            attendees: ['Client ABC'],
            description: 'Discuss new project requirements',
            recurring: false
        },
        {
            id: 3,
            title: 'Gym Session',
            start: new Date(2025, 10, 25, 18, 0),
            end: new Date(2025, 10, 25, 19, 0),
            category: 'Health',
            location: 'Fitness Center',
            attendees: [],
            description: 'Evening workout routine',
            recurring: true
        }
    ]);

    // Filter events
    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            const matchesSearch = searchTerm === '' ||
                event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                event.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesCategory = selectedCategories.length === 0 ||
                selectedCategories.includes(event.category);

            return matchesSearch && matchesCategory;
        });
    }, [events, searchTerm, selectedCategories]);

    // Navigation
    const navigate = useCallback((direction) => {
        const navigators = {
            month: () => setCurrentDate(dateUtils.addMonths(currentDate, direction)),
            week: () => setCurrentDate(dateUtils.addDays(currentDate, direction * 7)),
            day: () => setCurrentDate(dateUtils.addDays(currentDate, direction)),
            year: () => setCurrentDate(dateUtils.addYears(currentDate, direction))
        };
        navigators[view]();
    }, [currentDate, view]);

    const goToToday = () => setCurrentDate(new Date());

    // Event handlers
    const getEventsForDate = useCallback((date) => {
        return filteredEvents.filter(event => dateUtils.isSameDay(event.start, date));
    }, [filteredEvents]);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setShowEventModal(true);
    };

    const handleEditClick = (event) => {
        setEditingEvent(event);
        setShowEventForm(true);
        setShowEventModal(false);
        
        // Set form values when editing
        setTimeout(() => {
            if (formRefs.title.current) formRefs.title.current.value = event.title;
            if (formRefs.startDate.current) formRefs.startDate.current.value = event.start.toISOString().split('T')[0];
            if (formRefs.startTime.current) formRefs.startTime.current.value = event.start.toTimeString().slice(0, 5);
            if (formRefs.endDate.current) formRefs.endDate.current.value = event.end.toISOString().split('T')[0];
            if (formRefs.endTime.current) formRefs.endTime.current.value = event.end.toTimeString().slice(0, 5);
            if (formRefs.category.current) formRefs.category.current.value = event.category;
            if (formRefs.location.current) formRefs.location.current.value = event.location || '';
            if (formRefs.attendees.current) formRefs.attendees.current.value = event.attendees.join(', ');
            if (formRefs.description.current) formRefs.description.current.value = event.description || '';
            if (formRefs.recurring.current) formRefs.recurring.current.checked = event.recurring;
        }, 0);
    };

    const handleDeleteClick = (event) => {
        setEventToDelete(event);
        setShowDeleteConfirm(true);
        setShowEventModal(false);
    };

    const confirmDelete = () => {
        if (eventToDelete) {
            setEvents(events.filter(event => event.id !== eventToDelete.id));
            setShowDeleteConfirm(false);
            setEventToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
        setEventToDelete(null);
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Get values from refs
        const title = formRefs.title.current?.value || '';
        const startDate = formRefs.startDate.current?.value || '';
        const startTime = formRefs.startTime.current?.value || '';
        const endDate = formRefs.endDate.current?.value || '';
        const endTime = formRefs.endTime.current?.value || '';
        const category = formRefs.category.current?.value || 'Work';
        const location = formRefs.location.current?.value || '';
        const attendees = formRefs.attendees.current?.value || '';
        const description = formRefs.description.current?.value || '';
        const recurring = formRefs.recurring.current?.checked || false;

        // Validation
        if (!title || !startDate || !startTime || !endDate || !endTime) {
            alert('Please fill in all required fields');
            return;
        }

        const startDateTime = new Date(`${startDate}T${startTime}`);
        const endDateTime = new Date(`${endDate}T${endTime}`);

        if (startDateTime >= endDateTime) {
            alert('End time must be after start time');
            return;
        }

        const eventData = {
            title,
            start: startDateTime,
            end: endDateTime,
            category,
            location,
            attendees: attendees.split(',').map(a => a.trim()).filter(a => a),
            description,
            recurring
        };

        if (editingEvent) {
            // Update existing event
            setEvents(events.map(event =>
                event.id === editingEvent.id
                    ? { ...eventData, id: event.id }
                    : event
            ));
        } else {
            // Add new event
            setEvents([...events, { ...eventData, id: Date.now() }]);
        }

        closeEventForm();
    };

    const closeEventForm = () => {
        setShowEventForm(false);
        setEditingEvent(null);
        // Clear form fields
        Object.values(formRefs).forEach(ref => {
            if (ref.current) {
                if (ref.current.type === 'checkbox') {
                    ref.current.checked = false;
                } else {
                    ref.current.value = '';
                }
            }
        });
        // Reset category to default
        if (formRefs.category.current) {
            formRefs.category.current.value = 'Work';
        }
    };

    // Event Card Component
    const EventCard = ({ event, compact = false, showTime = true }) => (
        <div
            className="group rounded-lg p-2 mb-1 cursor-pointer transition-all hover:shadow-md border border-transparent hover:border-gray-200"
            style={{
                backgroundColor: `${CATEGORIES[event.category]}10`,
                borderLeftWidth: '3px',
                borderLeftColor: CATEGORIES[event.category]
            }}
            onClick={() => handleEventClick(event)}
        >
            <div className="font-medium truncate text-sm" style={{ color: CATEGORIES[event.category] }}>
                {event.title}
            </div>
            {showTime && (
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                    <Clock size={10} />
                    <span>{dateUtils.formatTime(event.start)}</span>
                    {event.recurring && <Repeat size={10} className="ml-1" />}
                </div>
            )}
        </div>
    );

    // Month View
    const MonthView = () => {
        const days = dateUtils.daysInMonth(currentDate);
        const firstDay = dateUtils.firstDayOfMonth(currentDate);
        const weeks = Math.ceil((days + firstDay) / 7);

        return (
            <div className="flex-1 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-7 border-b border-gray-100">
                    {DAY_NAMES_SHORT.map(day => (
                        <div key={day} className="p-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-rows-6">
                    {Array.from({ length: weeks }).map((_, weekIdx) => (
                        <div key={weekIdx} className="grid grid-cols-7 border-b border-gray-50 last:border-b-0">
                            {Array.from({ length: 7 }).map((_, dayIdx) => {
                                const dayNum = weekIdx * 7 + dayIdx - firstDay + 1;
                                const isCurrentMonth = dayNum > 0 && dayNum <= days;
                                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum);
                                const isToday = isCurrentMonth && dateUtils.isToday(date);
                                const dayEvents = isCurrentMonth ? getEventsForDate(date) : [];

                                return (
                                    <div
                                        key={dayIdx}
                                        className={`border-r border-gray-50 last:border-r-0 p-2 min-h-[120px] transition-colors ${
                                            !isCurrentMonth ? 'bg-gray-50/30' :
                                            isToday ? 'bg-blue-50/30' : 'hover:bg-gray-50/50'
                                        }`}
                                    >
                                        <div className={`text-sm font-medium mb-1 ${
                                            isToday ? 'bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs' :
                                            !isCurrentMonth ? 'text-gray-300' : 'text-gray-700'
                                        }`}>
                                            {isCurrentMonth ? dayNum : ''}
                                        </div>
                                        <div className="space-y-1 overflow-y-auto max-h-[80px]">
                                            {dayEvents.slice(0, 2).map(event => (
                                                <EventCard key={event.id} event={event} compact />
                                            ))}
                                            {dayEvents.length > 2 && (
                                                <div className="text-xs text-gray-400 pl-1">
                                                    +{dayEvents.length - 2} more
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // Week View
    const WeekView = () => {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const hours = Array.from({ length: 24 }, (_, i) => i);
        const weekDays = Array.from({ length: 7 }, (_, i) => dateUtils.addDays(startOfWeek, i));

        return (
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-[70px_repeat(7,1fr)] border-b border-gray-100 sticky top-0 bg-white z-10">
                    <div className="p-3 bg-gray-50/50"></div>
                    {weekDays.map(day => {
                        const isToday = dateUtils.isToday(day);
                        return (
                            <div key={day.toISOString()} className="p-3 text-center border-l border-gray-50">
                                <div className="text-xs font-medium text-gray-500 uppercase">{DAY_NAMES_SHORT[day.getDay()]}</div>
                                <div className={`text-lg font-semibold mt-1 ${
                                    isToday ? 'bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto' : 'text-gray-800'
                                }`}>
                                    {day.getDate()}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="overflow-y-auto max-h-[600px]">
                    {hours.map(hour => (
                        <div key={hour} className="grid grid-cols-[70px_repeat(7,1fr)] border-b border-gray-50 min-h-[70px]">
                            <div className="p-2 text-xs text-gray-400 text-right pr-3 bg-gray-50/30">
                                {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                            </div>
                            {weekDays.map(day => {
                                const dayEvents = getEventsForDate(day).filter(event =>
                                    event.start.getHours() === hour
                                );
                                return (
                                    <div key={day.toISOString()} className="border-l border-gray-50 p-1 hover:bg-gray-50/50">
                                        {dayEvents.map(event => (
                                            <EventCard key={event.id} event={event} showTime={false} />
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    // Day View
    const DayView = () => {
        const hours = Array.from({ length: 24 }, (_, i) => i);
        const dayEvents = getEventsForDate(currentDate);

        return (
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="text-2xl font-bold text-gray-800">
                        {DAY_NAMES[currentDate.getDay()]}, {MONTH_NAMES[currentDate.getMonth()]} {currentDate.getDate()}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{dayEvents.length} events scheduled</div>
                </div>
                <div className="overflow-y-auto max-h-[600px]">
                    {hours.map(hour => {
                        const hourEvents = dayEvents.filter(event => event.start.getHours() === hour);
                        return (
                            <div key={hour} className="flex border-b border-gray-50 min-h-[80px] hover:bg-gray-50/30 transition-colors">
                                <div className="w-20 p-3 text-xs text-gray-400 text-right bg-gray-50/30">
                                    {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                                </div>
                                <div className="flex-1 p-3 border-l border-gray-100">
                                    {hourEvents.map(event => (
                                        <EventCard key={event.id} event={event} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    // Year View
    const YearView = () => {
        const months = Array.from({ length: 12 }, (_, i) => i);

        return (
            <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {months.map(monthIdx => {
                        const monthDate = new Date(currentDate.getFullYear(), monthIdx, 1);
                        const days = dateUtils.daysInMonth(monthDate);
                        const firstDay = dateUtils.firstDayOfMonth(monthDate);
                        const monthEvents = filteredEvents.filter(event =>
                            event.start.getMonth() === monthIdx &&
                            event.start.getFullYear() === currentDate.getFullYear()
                        );

                        return (
                            <Card
                                key={monthIdx}
                                className="p-4 hover:shadow-lg transition-all cursor-pointer border border-gray-100 hover:border-blue-200"
                                onClick={() => {
                                    setCurrentDate(monthDate);
                                    setView('month');
                                }}
                            >
                                <div className="font-semibold text-center mb-3 text-gray-800">
                                    {MONTH_NAMES[monthIdx]}
                                </div>
                                <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                                    {DAY_NAMES_SHORT.map(day => (
                                        <div key={day} className="text-center text-gray-400 font-medium text-[10px]">
                                            {day[0]}
                                        </div>
                                    ))}
                                    {Array.from({ length: firstDay }).map((_, i) => (
                                        <div key={`empty-${i}`}></div>
                                    ))}
                                    {Array.from({ length: days }, (_, i) => i + 1).map(day => {
                                        const date = new Date(currentDate.getFullYear(), monthIdx, day);
                                        const hasEvent = monthEvents.some(event => event.start.getDate() === day);
                                        const isToday = dateUtils.isToday(date);
                                        return (
                                            <div
                                                key={day}
                                                className={`text-center p-1 rounded text-[11px] ${
                                                    isToday ? 'bg-blue-500 text-white font-bold' :
                                                    hasEvent ? 'bg-blue-100 text-blue-700 font-medium' :
                                                    'text-gray-500'
                                                }`}
                                            >
                                                {day}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="text-center text-xs text-gray-500 mt-2">
                                    {monthEvents.length} event{monthEvents.length !== 1 ? 's' : ''}
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    };

    // Event Modal
    const EventModal = () => {
        if (!showEventModal || !selectedEvent) return null;

        return (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
                onClick={() => setShowEventModal(false)}>
                <Card className="max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-1 h-16 rounded-full" style={{ backgroundColor: CATEGORIES[selectedEvent.category] }}></div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-2">{selectedEvent.title}</h2>
                                    <div className="flex gap-2">
                                        <Badge style={{ backgroundColor: CATEGORIES[selectedEvent.category], color: 'white', border: 'none' }}>
                                            {selectedEvent.category}
                                        </Badge>
                                        {selectedEvent.recurring && (
                                            <Badge variant="outline" className="flex items-center gap-1">
                                                <Repeat size={12} /> Recurring
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setShowEventModal(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-neutral-950 rounded-md">
                                <Clock className="text-gray-500 mt-0.5" size={18} />
                                <div className="flex-1">
                                    <div className="font-medium text-gray-900 dark:text-zinc-100 text-sm">Date & Time</div>
                                    <div className="text-gray-600 dark:text-zinc-300 text-sm mt-1">
                                        {dateUtils.formatDateShort(selectedEvent.start)}
                                    </div>
                                    <div className="text-gray-600 dark:text-zinc-300 text-sm">
                                        {dateUtils.formatTime(selectedEvent.start)} - {dateUtils.formatTime(selectedEvent.end)}
                                    </div>
                                </div>
                            </div>

                            {selectedEvent.location && (
                                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-neutral-950 rounded-md">
                                    <MapPin className="text-gray-500 mt-0.5" size={18} />
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-900 dark:text-zinc-100 text-sm">Location</div>
                                        <div className="text-gray-600 dark:text-zinc-300 text-sm mt-1">{selectedEvent.location}</div>
                                    </div>
                                </div>
                            )}

                            {selectedEvent.attendees && selectedEvent.attendees.length > 0 && (
                                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-neutral-950 rounded-md">
                                    <User className="text-gray-500 mt-0.5" size={18} />
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-900 dark:text-zinc-100 text-sm">Attendees</div>
                                        <div className="text-gray-600 dark:text-zinc-300 text-sm mt-1">{selectedEvent.attendees.join(', ')}</div>
                                    </div>
                                </div>
                            )}

                            {selectedEvent.description && (
                                <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-neutral-950 rounded-md">
                                    <Tag className="text-gray-500 mt-0.5" size={18} />
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-900 dark:text-zinc-100 text-sm">Description</div>
                                        <div className="text-gray-600 dark:text-zinc-300 text-sm mt-1">{selectedEvent.description}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100">
                            <Button
                                className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600"
                                onClick={() => handleEditClick(selectedEvent)}
                            >
                                <Edit size={16} />
                                Edit
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1 flex items-center justify-center gap-2 border-red-200 text-red-600 hover:bg-red-50"
                                onClick={() => handleDeleteClick(selectedEvent)}
                            >
                                <Trash2 size={16} />
                                Delete
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    };

    // Event Form Modal
    const EventFormModal = () => {
        if (!showEventForm) return null;

        return (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
                onClick={closeEventForm}>
                <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {editingEvent ? 'Edit Event' : 'Create New Event'}
                            </h2>
                            <button onClick={closeEventForm}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg">
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title *</label>
                                <Input
                                    ref={formRefs.title}
                                    type="text"
                                    placeholder="Enter event title"
                                    required
                                    className="w-full"
                                    defaultValue={editingEvent ? editingEvent.title : ''}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                                    <Input
                                        ref={formRefs.startDate}
                                        type="date"
                                        required
                                        className="w-full"
                                        defaultValue={editingEvent ? editingEvent.start.toISOString().split('T')[0] : ''}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Time *</label>
                                    <Input
                                        ref={formRefs.startTime}
                                        type="time"
                                        required
                                        className="w-full"
                                        defaultValue={editingEvent ? editingEvent.start.toTimeString().slice(0, 5) : ''}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                                    <Input
                                        ref={formRefs.endDate}
                                        type="date"
                                        required
                                        className="w-full"
                                        defaultValue={editingEvent ? editingEvent.end.toISOString().split('T')[0] : ''}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">End Time *</label>
                                    <Input
                                        ref={formRefs.endTime}
                                        type="time"
                                        required
                                        className="w-full"
                                        defaultValue={editingEvent ? editingEvent.end.toTimeString().slice(0, 5) : ''}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                                <select
                                    ref={formRefs.category}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    defaultValue={editingEvent ? editingEvent.category : 'Work'}
                                >
                                    {Object.keys(CATEGORIES).map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <Input
                                    ref={formRefs.location}
                                    type="text"
                                    placeholder="Add location"
                                    className="w-full"
                                    defaultValue={editingEvent ? editingEvent.location || '' : ''}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Attendees</label>
                                <Input
                                    ref={formRefs.attendees}
                                    type="text"
                                    placeholder="Comma-separated names"
                                    className="w-full"
                                    defaultValue={editingEvent ? editingEvent.attendees.join(', ') : ''}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    ref={formRefs.description}
                                    placeholder="Add event description"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                                    defaultValue={editingEvent ? editingEvent.description || '' : ''}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    ref={formRefs.recurring}
                                    type="checkbox"
                                    id="recurring"
                                    className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    defaultChecked={editingEvent ? editingEvent.recurring : false}
                                />
                                <label htmlFor="recurring" className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <Repeat size={14} /> Recurring Event
                                </label>
                            </div>

                            <div className="flex gap-3 pt-4 border-t border-gray-100">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="flex-1"
                                    onClick={closeEventForm}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600"
                                >
                                    <Save size={16} />
                                    {editingEvent ? 'Update Event' : 'Create Event'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        );
    };

    // Delete Confirmation Modal
    const DeleteConfirmationModal = () => {
        if (!showDeleteConfirm || !eventToDelete) return null;

        return (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
                onClick={cancelDelete}>
                <Card className="max-w-md w-full animate-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                    <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Trash2 className="text-red-600" size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Delete Event</h3>
                                <p className="text-gray-600 text-sm mt-1">This action cannot be undone.</p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <div className="font-semibold text-gray-900">{eventToDelete.title}</div>
                            <div className="text-sm text-gray-600 mt-1">
                                {dateUtils.formatDateShort(eventToDelete.start)} • {dateUtils.formatTime(eventToDelete.start)}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={cancelDelete}
                            >
                                Cancel
                            </Button>
                            <Button
                                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                                onClick={confirmDelete}
                            >
                                Delete Event
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    };

    // Quick Stats
    const QuickStats = () => {
        const todayEvents = getEventsForDate(new Date());
        const upcomingEvents = filteredEvents.filter(event => event.start > new Date()).length;

        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="p-5 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-slate-100">{filteredEvents.length}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-200 mt-1">Total Events</div>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                            <CalendarIcon className="text-blue-600 dark:text-blue-200" size={24} />
                        </div>
                    </div>
                </Card>
                <Card className="p-5 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-slate-100">{todayEvents.length}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-200 mt-1">Today&apos;s Events</div>
                        </div>
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                            <Clock className="text-green-600 dark:text-green-200" size={24} />
                        </div>
                    </div>
                </Card>
                <Card className="p-5 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-slate-100">{upcomingEvents}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-200 mt-1">Upcoming</div>
                        </div>
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center">
                            <CalendarIcon className="text-orange-600 dark:text-orange-200" size={24} />
                        </div>
                    </div>
                </Card>
            </div>
        );
    };

    return (
        <div className="min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">Calendar</h1>
                        <p className="text-gray-600 dark:text-gray-300">Manage your schedule with ease</p>
                    </div>
                    <Button
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 px-6"
                        onClick={() => setShowEventForm(true)}
                    >
                        <Plus size={20} />
                        New Event
                    </Button>
                </div>

                <QuickStats />

                {/* Search and Filters */}
                <Card className="p-4 mb-6 border border-gray-100 shadow-sm">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <Input
                                type="text"
                                placeholder="Search events..."
                                className="pl-10 border-gray-200 focus:border-blue-300"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap gap-2 items-center">
                            <span className="flex items-center text-sm text-gray-600 mr-2">
                                <Filter className="mr-1" size={14} /> Filter:
                            </span>
                            {Object.keys(CATEGORIES).map(category => (
                                <Badge
                                    key={category}
                                    variant={selectedCategories.includes(category) ? "default" : "outline"}
                                    className="cursor-pointer transition-all hover:scale-105"
                                    style={{
                                        backgroundColor: selectedCategories.includes(category) ? CATEGORIES[category] : 'transparent',
                                        color: selectedCategories.includes(category) ? 'white' : CATEGORIES[category],
                                        borderColor: CATEGORIES[category]
                                    }}
                                    onClick={() => toggleCategory(category)}
                                >
                                    {category}
                                </Badge>
                            ))}
                            {selectedCategories.length > 0 && (
                                <Button variant="ghost" size="sm" onClick={() => setSelectedCategories([])} className="text-xs">
                                    Clear All
                                </Button>
                            )}
                        </div>
                    </div>
                </Card>

                {/* Calendar Controls */}
                <Card className="p-4 mb-6 border border-gray-100 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm" onClick={() => navigate(-1)} className="hover:bg-gray-100">
                                <ChevronLeft size={20} />
                            </Button>
                            <Button variant="outline" size="sm" onClick={goToToday} className="hover:bg-gray-100">
                                Today
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => navigate(1)} className="hover:bg-gray-100">
                                <ChevronRight size={20} />
                            </Button>
                            <h2 className="text-xl font-bold text-gray-900 min-w-[200px]">
                                {view === 'year'
                                    ? currentDate.getFullYear()
                                    : `${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                                }
                            </h2>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            {['month', 'week', 'day', 'year'].map(viewType => (
                                <Button
                                    key={viewType}
                                    variant={view === viewType ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setView(viewType)}
                                    className={view === viewType ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-gray-100"}
                                >
                                    {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
                                </Button>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Calendar View */}
                {view === 'month' && <MonthView />}
                {view === 'week' && <WeekView />}
                {view === 'day' && <DayView />}
                {view === 'year' && <YearView />}

                <EventModal />
                <EventFormModal />
                <DeleteConfirmationModal />
            </div>
        </div>
    );
};

export default FullCalendar;