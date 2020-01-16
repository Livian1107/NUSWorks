export interface TimesheetEvent<MetaType = any> {
      id?: string | number;
      start: Date;
      end?: Date;
      module?: string;
      task?: string;
      note?: string;
      allDay?: boolean;
      cssClass?: string;
      resizable?: {
        beforeStart?: boolean;
        afterEnd?: boolean;
      };
      draggable?: boolean;
      meta?: MetaType;
    }
    