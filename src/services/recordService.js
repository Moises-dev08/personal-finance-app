import http from "./httpService";

const apiEndpoint = "/records";

function recordUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getRecords() {
  return http.get(apiEndpoint);
}

export function getIncometype() {
  return http.get(apiEndpoint + "/incometype");
}

export function getOutcometype() {
  return http.get(apiEndpoint + "/outcometype");
}

export function newRecord(data) {
  return http.post(apiEndpoint, {
    concept: data.concept,
    amount: data.amount,
    date: data.date,
    type: data.type,
  });
}

export function getLast10Records() {
  return http.get(apiEndpoint + "/limit10");
}

export function getOutcome() {
  return http.get(apiEndpoint + "/outcome");
}

export function getIncome() {
  return http.get(apiEndpoint + "/income");
}

export function deleteRecord(recordId) {
  return http.delete(recordUrl(recordId));
}

export function updateRecord(data, recordId) {
  return http.put(recordUrl(recordId), {
    concept: data.concept,
    amount: data.amount,
    date: data.date,
    type: data.type,
  });
}
