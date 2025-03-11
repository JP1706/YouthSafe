import React from 'react'
import '../../assets/css/adminlte.min.css'
import '../../assets/css/adminlte.css'

export const AddHabit = () => {
  return (
    <div className="register-page bg-dark d-flex align-items-center justify-content-center">
      <div className="register-box w-50 p-4">
        <div className="card bg-dark text-light border-primary-subtle card-primary p-4 mt-5">
          <div className="card-header text-center">
            <h3 className="text-info">Habits Form</h3>
          </div>
          <div className="card-body register-card-body">
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control form-control-lg text-primary" 
                  placeholder="Full Name" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-secondary">Daily Screen Time (hours)</label>
                <input 
                  type="number" 
                  className="form-control form-control-lg text-primary" 
                  placeholder="e.g. 3" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-secondary d-block">Social Media Usage Frequency</label>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="socialMediaUsage" 
                    id="usageRarely" 
                    value="rarely"
                    required 
                  />
                  <label className="form-check-label text-primary" htmlFor="usageRarely">Rarely</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="socialMediaUsage" 
                    id="usageOccasionally" 
                    value="occasionally"
                  />
                  <label className="form-check-label text-primary" htmlFor="usageOccasionally">Occasionally</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="socialMediaUsage" 
                    id="usageFrequently" 
                    value="frequently"
                    />
                    <label className="form-check-label text-primary" htmlFor="usageFrequently">Frequently</label>
                </div>
                </div>
              {/* <div className="mb-3">
                <label className="form-label text-secondary">Social Media Usage Frequency</label>
                <select className="form-control form-control-lg text-primary" required>
                  <option value="" disabled selected>Select frequency</option>
                  <option value="rarely">Rarely</option>
                  <option value="occasionally">Occasionally</option>
                  <option value="frequently">Frequently</option>
                  <option value="very_frequently">Very Frequently</option>
                </select>
              </div> */}
              <div className="mb-3">
                <label className="form-label text-secondary">Average Hours of Sleep</label>
                <input 
                  type="number" 
                  className="form-control form-control-lg text-primary" 
                  placeholder="e.g. 7" 
                  required 
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-secondary d-block">Physical Activity Level</label>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="physicalActivity" 
                    id="activitySedentary" 
                    value="sedentary"
                    required 
                  />
                  <label className="form-check-label text-primary" htmlFor="activitySedentary">Sedentary</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="physicalActivity" 
                    id="activityModerate" 
                    value="moderate"
                  />
                  <label className="form-check-label text-primary" htmlFor="activityModerate">Moderate</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="physicalActivity" 
                    id="activityActive" 
                    value="active"
                  />
                  <label className="form-check-label text-primary" htmlFor="activityActive">Active</label>
                </div>
              </div>
              {/* <div className="mb-3">
                <label className="form-label text-secondary">Physical Activity Level</label>
                <select className="form-control form-control-lg text-primary" required>
                  <option value="" disabled selected>Select activity level</option>
                  <option value="sedentary">Sedentary</option>
                  <option value="moderate">Moderate</option>
                  <option value="active">Active</option>
                </select>
              </div> */}
              
              <div className="mb-3">
                <textarea 
                  className="form-control form-control-lg text-primary" 
                  rows="3" 
                  placeholder="Additional comments"
                ></textarea>
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-outline-primary btn-lg">
                  Submit Habits
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
