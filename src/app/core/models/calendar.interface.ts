export interface Event {
    id: string;
    title: string;
    start: string;
    end: string;
    description?: string;
  }

  
  export interface CalendarState {
    events: Event[];
    isLoading: boolean;
    error: any;
  }