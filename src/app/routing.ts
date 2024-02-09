
export const routing = {
  admin: {
    main: "admin/main",
    standard: {
      manage: "admin/standard/manage",
      save: "admin/standard/save",
      update: "admin/standard/update"
    },
    tip: {
      manage: "admin/tip/manage",
      save: "admin/tip/save",
      update: "admin/tip/update"
    },
    report: {
      manage: "admin/report/manage",
      save: "admin/report/save",
      update: "admin/report/update",
      standard: "admin/report/standard",
      uni: "admin/report/uni"
    }
  },
  user:{
    profile: "user/profile"
  },
  auth:{
    signin: "auth/signin",
    signup:"auth/signup"
  },
  public: {
    main: "",
    report: "report"
  }
}
