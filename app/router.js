var AppRouter = Backbone.Router.extend({

    routes: {
        "":"routeFromURL",
    },

    routeFromURL:function(){
        /*if(current_step !== null && current_step !== undefined) App.currentStep = current_step;
        if(action_type !== null && action_type !== undefined) App.selectedChoices.action_type = action_type;
        if(construction !== null && construction !== undefined) App.selectedChoices.construction = construction;
        if(passing !== null && passing !== undefined) App.selectedChoices.passing = passing;
        if(goal_zone !== null && goal_zone !== undefined) App.selectedChoices.goal_zone = goal_zone;
        if(goal_bodyhit !== null && goal_bodyhit !== undefined) App.selectedChoices.goal_bodyhit = goal_bodyhit;
        if(goal_netzone !== null && goal_netzone !== undefined) App.selectedChoices.goal_netzone = goal_netzone;*/
        App.updateFromRouter();
    },
    
    updateRoute:function(triggerize){
        //this.navigate( App.currentStep +"/" +App.selectedChoices.action_type + "/" + App.selectedChoices.construction + "/" + App.selectedChoices.passing + "/" + App.selectedChoices.goal_zone + "/" + App.selectedChoices.goal_bodyhit + "/" + App.selectedChoices.goal_netzone, {trigger: triggerize});
    },

});

module.exports = AppRouter;