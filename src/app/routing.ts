
export const routing = {
  admin: {
    main: "admin/main",
    standard: {
      manage: "admin/standard/manage",
      save: "admin/standard/save",
      update: "admin/standard/update"
    },
    report: {
      manage: "admin/report/manage",
      save: "admin/report/save",
      update: "admin/report/update"
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
