import { Card } from "primereact/card"

export const MetricSkeleton = () => {
    return (
        <Card
            className="
            bg-slate-100
            transition-all
            duration-200
            hover:shadow-lg
            shadow-none            
          "
          
          >
            <div className="flex items-center justify-between">
              {/* Left: Text */}
              <div>
                <div className="bg-slate-200 animate-pulse w-80 h-5 mb-2">
                  
                </div>
                <div className="bg-slate-200 animate-pulse w-20 h-20">
                  
                </div>
              </div>

              {/* Right: Icon */}
              <div
                className="bg-slate-200 animate-pulse w-12 h-12 self-end"
              />
            </div>
          </Card>
    )
}