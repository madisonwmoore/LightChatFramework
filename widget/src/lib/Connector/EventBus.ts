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
        console.log(this.eventSubscribers)
        if(this.eventSubscribers[eventname]?.subscribers){
            this.eventSubscribers[eventname].subscribers.push(callback);
        }
        else{
            this.eventSubscribers[eventname]={}
            this.eventSubscribers[eventname]["subscribers"]=new Array(1);
            this.eventSubscribers[eventname].subscribers.push(callback);
        }
    }

    deleteAll=()=>{
        this.eventSubscribers={

        };
    }
}

export default EventBus;