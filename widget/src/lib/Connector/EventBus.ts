class EventBus{
    eventSubscribers:{[key:string]:any};
    constructor(){
        this.eventSubscribers={};

    }

    pub=(eventname:string, eventPayload:any)=>{
        this.eventSubscribers[eventname]?.subscribers.forEach((callback:any)=>{
            callback(eventPayload);
        })
    }

    sub=(eventname:string, callback:any)=>{
        if(this.eventSubscribers[eventname].subscribers){
            this.eventSubscribers[eventname].subscribers.push(callback);
        }
        else{
            this.eventSubscribers[eventname].subscribers=[callback]
        }
    }

    deleteAll=()=>{
        this.eventSubscribers={

        };
    }
}

export default EventBus;