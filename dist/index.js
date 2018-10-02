"use strict";
/* IMPORT */
Object.defineProperty(exports, "__esModule", { value: true });
var unstated = require("unstated");
/* HMR */
var HMR = {
    isEnabled: true,
    containers: {}
};
/* HOOK */
unstated['__SUPER_SECRET_CONTAINER_DEBUG_HOOK__'](function (container) {
    if (!HMR.isEnabled)
        return;
    var name = container.constructor.name;
    if (HMR.containers[name]) {
        var oldState_1 = HMR.containers[name].state;
        Object.defineProperty(container, 'state', {
            get: function () {
                return this.__state;
            },
            set: function (state) {
                this.__state = this.__state ? state : oldState_1;
            }
        });
    }
    HMR.containers[name] = container;
});
/* EXPORT */
exports.default = HMR;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVosbUNBQXFDO0FBRXJDLFNBQVM7QUFFVCxJQUFNLEdBQUcsR0FBRztJQUNWLFNBQVMsRUFBRSxJQUFJO0lBQ2YsVUFBVSxFQUFFLEVBQUU7Q0FDZixDQUFDO0FBRUYsVUFBVTtBQUVWLFFBQVEsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFFLFVBQUEsU0FBUztJQUUxRCxJQUFLLENBQUMsR0FBRyxDQUFDLFNBQVM7UUFBRyxPQUFPO0lBRXRCLElBQUEsaUNBQUksQ0FBMEI7SUFFckMsSUFBSyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFHO1FBRTFCLElBQU0sVUFBUSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxjQUFjLENBQUcsU0FBUyxFQUFFLE9BQU8sRUFBRTtZQUMxQyxHQUFHO2dCQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUN0QixDQUFDO1lBQ0QsR0FBRyxZQUFHLEtBQUs7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVEsQ0FBQztZQUNqRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0tBRUo7SUFFRCxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUVuQyxDQUFDLENBQUMsQ0FBQztBQUVILFlBQVk7QUFFWixrQkFBZSxHQUFHLENBQUMifQ==