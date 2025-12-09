function numUniqueEmails(emails) {
  let arr = [];
  for (let email of emails) {
    const [loacalPart, domain] = email.split("@");
    const cleanedPart = loacalPart.split("+")[0].replace(/\./g, "");

    arr.push(`${cleanedPart}@${domain}`);
  }
  return new Set(arr).size;
}

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
);
